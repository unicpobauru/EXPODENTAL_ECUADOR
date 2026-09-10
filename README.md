# LP — Sorteo de becas UniCPO (Ecuador)

Landing page de una sola pantalla para captar registros al **sorteo de becas para
estudiar en Brasil y Ecuador** (Faculdade UniCPO / CPO Ecuador). Los datos del
formulario se envían a una **Hoja de cálculo de Google** vía Apps Script.

Stack: React + TypeScript + Tailwind CSS v4 + Vite. Diseño inspirado en las artes de
la campaña UniCPO Ecuador (carpeta `ECUADOR/` fuera de este repo).

## En vivo

- **URL (para el QR):** https://unicpobauru.github.io/EXPODENTAL_ECUADOR/
- Publica desde la rama **`gh-pages`** (contenido de `dist/`). El código fuente está en **`main`**.

## Comandos

```bash
npm install
npm run dev        # http://localhost:5173/EXPODENTAL_ECUADOR/
npm run build      # dist/
npm run preview    # sirve el build localmente
npm run deploy     # build + publica en gh-pages  (GitHub Pages ~1 min en actualizar)
```

## Estructura

`src/App.tsx` monta solo **Header + Hero + Footer**.

- `src/sections/Header.tsx` — logo UniCPO (blanco) fijo arriba.
- `src/sections/Hero.tsx` — degradado azul, capa de decoraciones (`<Decorations/>`:
  marcas de registro, chevrons, cuatrifolio, círculo cian, puntos), foto de graduados
  y la **tarjeta de formulario** (`id="formulario"`).
- `src/sections/Footer.tsx` — logo UniCPO, co-brand CPO Ecuador + FAINTER, copyright.
- `src/components/ui/LeadForm.tsx` — campos: nombre, teléfono, correo, ¿odontólogo?,
  ¿especialista? (+ área si es "Sí"), tiempo en odontología, perfil laboral,
  ¿usa sistema de agenda?, facturación mensual. Los grupos de opciones usan el
  helper `ChoiceGroup`.
- `src/lib/leadForm.ts` — **`GOOGLE_SCRIPT_URL`** apunta al Apps Script de la planilla.
  Las claves de `fields` tienen que coincidir con `FIELD_KEYS` de `apps-script/Code.gs`.
  Envío `no-cors` (la respuesta es opaca; la UI muestra éxito al disparar). Si está
  en `null`, el formulario NO envía nada (solo UI).
- `apps-script/Code.gs` — script que se pega en la planilla (Extensiones ▸ Apps Script)
  para recibir los registros. Instrucciones de implementación dentro del archivo.
- `src/index.css` — paleta azul/cian (`@theme`) y fuente Poppins.

## Imágenes (`public/images/`)

| Archivo | Uso |
|---|---|
| `logo-unicpo.png` | logo blanco (header y footer) |
| `hero-people.jpg` | foto de graduados — sin usar (el Hero es solo degradado azul) |
| `hero-grad.jpg` | alternativa (graduada con diploma), sin usar |
| `cobrand-cpo-fainter.jpg` | franja CPO Ecuador + FAINTER (footer) |

Si una imagen falta, el elemento se oculta y queda el degradado — no rompe la página.

## Pendiente / a revisar

- **Conectar la planilla nueva:** implementar `apps-script/Code.gs` en la hoja destino
  y pegar la URL `/exec` en `GOOGLE_SCRIPT_URL` (`src/lib/leadForm.ts`). Mientras esté
  en `null`, el formulario funciona pero no guarda nada.
- **Probar el formulario:** hacer un registro de prueba y confirmar que la fila cae
  completa en la hoja.
- **Textos legales:** el enlace "Política de Privacidad" del footer apunta a `#`.
- Fuente exacta y colores: aproximados a las artes; afinar si el cliente pasa la marca.
