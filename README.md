# Expodental Ecuador — Landing page

Landing page en **React + TypeScript + Tailwind CSS v4** para **Expodental Ecuador**,
Feria Internacional de Odontología. La estructura, los componentes y el comportamiento
están heredados del sitio `mpa-medicina`; el contenido está en **español** y en su mayoría
es **placeholder** (fecha, sede, organizador, cifras, FAQ) para completar antes de difundir.

## En vivo

- **URL pública (para el QR):** https://unicpobauru.github.io/EXPODENTAL_ECUADOR/
- Se publica desde la rama **`gh-pages`** (contenido de `dist/`). La rama **`main`** tiene el código fuente.

## Cómo trabajar

```bash
npm install
npm run dev        # http://localhost:5173/EXPODENTAL_ECUADOR/
npm run build      # build de producción en dist/
npm run preview    # sirve el build localmente
npm run deploy     # build + publica dist/ en la rama gh-pages (GitHub Pages)
```

Después de `npm run deploy`, GitHub Pages tarda ~1 minuto en actualizar.

## Qué falta completar (todo son placeholders)

- **Fecha / sede / ciudad / organizador:** buscá `[Fecha]`, `[Sede]`, `[Ciudad]`,
  `[Organizador]`, `[X] días` en `src/` e `index.html`.
- **Cifras del evento:** `src/data/stats.ts` (marcas, visitantes, conferencias, países).
- **Textos:** `src/data/trustPoints.ts`, `src/data/differentials.ts`, `src/data/about.ts`,
  `src/data/cohorts.ts`, `src/data/faq.ts`.
- **Imágenes:** poné los archivos en `public/images/` (`hero.jpg`, `evento.jpg`,
  `dif-1.jpg`…`dif-4.jpg`). Si faltan, el sitio muestra un degradado de marca — no se rompe.
- **Logo:** hoy es una marca de texto ("Expodental Ecuador") en `src/sections/Header.tsx`
  y `src/sections/Footer.tsx`. Reemplazá por `<img>` cuando tengas el logo.
- **Favicon:** provisorio (SVG inline con una "E") en `index.html`.
- **Formulario de registro:** **todavía NO envía datos**. En `src/lib/leadForm.ts`,
  `GOOGLE_SCRIPT_URL` está en `null`. Pegá ahí la URL del Web App de Google Apps Script
  para que las inscripciones caigan en una Hoja de cálculo.
- **Colores:** la paleta (azul marino + dorado) está en `src/index.css` (`@theme`).

## Secciones

En pantalla (`src/App.tsx`): Header, Hero + formulario, Quote, Stats, "Por qué asistir"
(Differentials), "Qué es Expodental Ecuador" (About), FAQ, CTA final, Footer.

Quedaron en el repo pero **fuera del render** (por si se reutilizan): `MarketScenario`,
`CoordinatorVideo`, `Methodology`, `Modules`, `Faculty`, `Testimonials`, `Facility`,
`VirtualTour` — con su contenido original (en portugués) del sitio mpa-medicina.
