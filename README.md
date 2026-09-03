# MPA — Medical Performance Academy

Landing page em React + TypeScript + Tailwind CSS v4 para o **MPA — Medical Performance
Academy**, Pós-Graduação em Medicina Metabólica e Longevidade, uma realização do **Grupo
UniCPO** (FAINTER + UniCPO). Estrutura, componentes e comportamento herdados do modelo já
validado em `unicpo-miniimplantes` e `diplomado-alineadores`; conteúdo, imagens, paleta de
cores e idioma (Português-BR) são específicos deste curso, extraídos do material comercial
provisto (`MPA Medical Performance Academy.pptx`).

## Cómo ejecutar

```bash
cd mpa-medicina
npm install
npm run dev       # http://localhost:5173
npm run build      # build de produção em dist/
npm run preview    # serve o build de produção localmente
```

## O que é diferente em relação aos outros dois sites

- **Nova identidade visual**: fundo quase-preto/azul-marinho (`#0b1b33` ink, `#001360` /
  `#050b16` variações) + dourado premium (`#d4af37` / `#c6a23a`), extraídos diretamente das
  cores reais usadas no material do MPA — mais "luxo" do que a paleta verde-teal do Grupo
  UniCPO nos outros dois sites.
- **Nova logo**: MPA (preta e branca) substitui a logo UniCPO em todo o site — a marca UniCPO
  aparece apenas em texto, como "realização do Grupo UniCPO".
- **Público**: médicos formados no Brasil (não há foco internacional/estrangeiro como nos
  outros dois sites) — refletido no FAQ, no idioma 100% Português-BR e na ausência de menção a
  viagem/documentação para outro país.
- **Seção institucional**: virou "O Grupo UniCPO", contando a história completa (2005–2026,
  linha do tempo) e mencionando a FAINTER, em vez de focar só na UniCPO.
- **Tour 360°**: removido do fluxo da página a pedido do cliente. O componente
  `src/sections/VirtualTour.tsx` continua no código, só não é importado em `App.tsx` — para
  reativar, basta descomentar as duas linhas marcadas lá.
- **"Metodologia do coordenador"**: como não há vídeo do coordenador (e não fabricamos falas
  que ele não disse), essa seção virou um card com a foto e a bio real do Dr. Glauco Melo,
  extraída do material — nenhuma citação foi inventada.
- **Currículo**: em vez de um punhado de módulos T/P, é a matriz curricular completa do PPT —
  10 áreas, 400 horas, com o professor responsável por cada uma.

## Assets reais já integrados (`public/images/`)

| Arquivo | Origem no `.pptx` | Uso |
|---|---|---|
| `logo-mpa-black.png` / `logo-mpa-white.png` | slides diversos | Header (troca automática conforme scroll) e Footer |
| `favicon.png` | recortado do ícone da logo MPA | Ícone do navegador |
| `hero-mpa.jpg` | imagem de fundo do hero | Seção Hero |
| `dna-metodologia.jpg`, `dna-diferenciais.jpg` | imagens de fundo tech/DNA do deck | Metodologia e um card de Diferenciais |
| `predio-fainter-01/02/03.jpg` | fotos reais da fachada FAINTER | Seção "O Grupo UniCPO" e carrossel de Infraestrutura |
| `logo-fainter.png` | logo da FAINTER | Footer |
| `esp-*.jpg` (9 arquivos) | fotos reais dos especialistas | Seção "Coordenação acadêmica" e "Corpo docente" |

## O que falta completar antes de publicar

- **Contato**: o site NÃO usa mais WhatsApp. Todos os CTAs (`src/lib/cta.ts` → `FORM_HREF`)
  levam ao formulário de inscrição no topo da Hero (`id="formulario"`). O envio grava uma
  linha na Planilha Google via Apps Script (`src/lib/leadForm.ts` → `GOOGLE_SCRIPT_URL`).
  O payload manda os campos com nomes em PT e ES ao mesmo tempo — confirmar com o cliente
  em que colunas os dados caíram na primeira inscrição de teste.
- **Seção "A palavra de quem vai te formar"** (`src/data/testimonials.ts`): falas de
  posicionamento dos próprios professores (Glauco / Thaís Moreschi / Maurício Mosna),
  escritas por nós — não são depoimentos de alunos (a 1ª turma ainda não se formou).
- **Seções ocultadas a pedido do cliente**: `Facility` (infraestrutura) e a linha do tempo de
  `About` — os componentes/dados continuam no repositório; ver comentários em `App.tsx`.
- **Datas da turma**: já preenchidas com as datas reais do PPT em `src/data/cohorts.ts`
  (início 06/02/2027 + 4 encontros presenciais) e citadas na FAQ. Confirmar com o cliente antes
  de publicar.
- **Preço**: por decisão do cliente, o investimento (18x R$4.997 / oferta fundador R$2.998 +
  matrícula R$997, conforme o PPT) **não** é exibido na página — fluxo 100% "preencha o formulário".
- **CRM/RQE dos professores**: atualizados conforme o PPT (slides 15–18). Alguns números
  mudaram em relação à versão anterior do site — conferir com o cliente (ver `src/data/faculty.ts`).

## Estrutura de pastas

```
src/
  components/ui/         # Button, Container, CountUp, DragCarousel, ImagePlaceholder, Reveal...
  sections/               # Header, Hero, Quote, Differentials, About, Stats, CoordinatorVideo,
                          # Methodology, Modules, Faculty, Testimonials, Facility, FAQ, FinalCTA,
                          # Footer — VirtualTour existe mas não é usado (ver acima)
  data/                   # conteúdo separado dos componentes (nav, about, faq, modules, etc.)
  hooks/useScrolled.ts    # header transparente → sólido
  lib/                    # cta.ts (#formulario), leadForm.ts (envio p/ Planilha), renderBold.tsx
  index.css               # design tokens (@theme) com a paleta MPA
```

## Deploy

**No ar em:** https://unicpobauru.github.io/mpa-medicina/

Diferente dos outros dois sites do grupo (que fazem deploy automático via GitHub Actions a
cada `git push`), este aqui está publicado direto do branch `gh-pages` — o token do `gh` CLI
usado nesta máquina não tem o escopo `workflow` necessário para o GitHub aceitar um arquivo em
`.github/workflows/`, e a autorização interativa (`gh auth refresh -s workflow`) falhou
repetidamente por um erro de rede (`context deadline exceeded`), então não deu pra configurar
o deploy automático desta vez.

**Para publicar uma atualização** (até resolver o escopo do token):

```bash
cd mpa-medicina
npm run build
# depois, copiar o conteúdo de dist/ para o branch gh-pages e dar push —
# me peça pra fazer isso quando tiver mudanças pra publicar.
```

Se no futuro conseguir autorizar o escopo `workflow` (repetir `gh auth refresh -h github.com -s
workflow` e confirmar em https://github.com/login/device), aí sim dá pra copiar o
`.github/workflows/deploy.yml` do `unicpo-miniimplantes` ou `diplomado-alineadores` para cá e
ativar o deploy automático — o `vite.config.ts` já está com o `base` certo (`/mpa-medicina/`)
para isso funcionar sem mudanças.
