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
- `src/components/ui/LeadForm.tsx` — campos: nombre, teléfono, correo, ¿odontólogo?
- `src/lib/leadForm.ts` — **`GOOGLE_SCRIPT_URL`** apunta al Apps Script del cliente.
  Cada dato se manda bajo varias claves (nombre/nombreCompleto/name, etc.) para caer
  en la columna correcta sea cual sea el nombre del parámetro que espera el script.
  Envío `no-cors` (la respuesta es opaca; la UI muestra éxito al disparar).
- `src/index.css` — paleta azul/cian (`@theme`) y fuente Poppins.

## Imágenes (`public/images/`)

| Archivo | Uso |
|---|---|
| `logo-unicpo.png` | logo blanco (header y footer) |
| `hero-people.jpg` | foto de graduados, fondo derecho del Hero |
| `hero-grad.jpg` | alternativa (graduada con diploma), sin usar |
| `cobrand-cpo-fainter.jpg` | franja CPO Ecuador + FAINTER (footer) |

Si una imagen falta, el elemento se oculta y queda el degradado — no rompe la página.

## Pendiente / a revisar

- **Probar el formulario:** hacer un registro de prueba y confirmar en qué columnas
  cayó cada campo en la hoja. Ajustar `LEAD_TAG` o las claves en `src/lib/leadForm.ts`
  si hace falta.
- **Textos legales:** el enlace "Política de Privacidad" del footer apunta a `#`.
- Fuente exacta y colores: aproximados a las artes; afinar si el cliente pasa la marca.
