import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Quote } from "./sections/Quote";
import { Stats } from "./sections/Stats";
import { Differentials } from "./sections/Differentials";
import { About } from "./sections/About";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

// NOTA: este es un scaffold basado en el sitio "mpa-medicina". Varias secciones
// del original quedaron fuera del render pero siguen en src/sections/ por si se
// quieren reactivar: MarketScenario, CoordinatorVideo, Methodology, Modules,
// Faculty, Testimonials, Facility, VirtualTour. Para usarlas, importalas y
// agregalas abajo.

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Quote />
        <Stats />
        <Differentials />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
