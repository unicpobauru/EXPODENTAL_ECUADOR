# Formulário de inscrição → Planilha Google (Apps Script)

O formulário do topo do site envia os dados para o Web App do Google Apps Script
configurado em `src/lib/leadForm.ts` (`GOOGLE_SCRIPT_URL`). O envio é um `POST`
`application/x-www-form-urlencoded` — os campos chegam em `e.parameter` do
Apps Script (e o corpo cru em `e.postData.contents`). Não dispara preflight CORS.

## Código do Apps Script (cole este, exatamente)

Na planilha: **Extensões → Apps Script**, apague o que estiver lá e cole:

```javascript
function doGet() {
  return ContentService
    .createTextOutput("Endpoint do formulário ativo. Use POST para enviar leads.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    var d = {};
    if (e && e.postData && e.postData.contents) {
      try { d = JSON.parse(e.postData.contents); } catch (x) { d = {}; }
    }
    if (e && e.parameter) {
      for (var k in e.parameter) { if (d[k] === undefined) d[k] = e.parameter[k]; }
    }

    function pick(keys) {
      for (var i = 0; i < keys.length; i++) {
        var v = d[keys[i]];
        if (v !== undefined && v !== null && String(v).trim() !== "") return String(v).trim();
      }
      return "";
    }

    var data = pick(["data", "Data", "dataHora", "fecha", "date", "timestamp"]) ||
      Utilities.formatDate(new Date(), "America/Sao_Paulo", "dd-MM-yyyy HH:mm:ss");
    var nome = pick(["nome", "Nome", "nome_completo", "nomeCompleto", "nombre", "name"]);
    var tel = pick(["telefone", "Telefone", "celular", "whatsapp", "telefono", "phone"]);
    var email = pick(["email", "Email", "e-mail", "mail"]);
    var medico = pick(["medico", "ehMedico", "funcao", "exerceFuncao", "jaExerce", "esOdontologo"]);
    var tag = pick(["tag", "Tag", "origem", "Origem"]);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data", "Nome", "Telefone", "E-mail", "É médico?", "Tag"]);
    }
    sheet.appendRow([data, nome, tel, email, medico, tag]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

- Lê tanto corpo JSON (`e.postData.contents`) quanto campos de formulário (`e.parameter`).
- Pega o **Nome** de qualquer uma das variações (`nome`, `Nome`, `nombre`, `name`…), então
  não importa como o front mande — o nome sempre cai na coluna certa.
- Se a planilha estiver vazia, cria o cabeçalho: `Data | Nome | Telefone | E-mail | É médico? | Tag`.
- Cada linha nova entra **nessa ordem de colunas**. Se a planilha já tiver colunas em outra
  ordem, o ideal é usar uma aba nova/limpa para os leads.

## Publicar a nova versão (sem mudar a URL)

1. `Ctrl+S` para salvar.
2. **Implantar → Gerenciar implantações**.
3. No lápis (editar) da implantação ativa → **Versão: Nova versão** → **Implantar**.

A URL `/exec` continua a mesma — não precisa mexer no site.
