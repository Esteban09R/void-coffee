import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { Bitcount_Grid_Double } from "next/font/google";

/**  El Concepto: "The Coffee for the Night Owls" */
/*
V0ID no es una cafetería soleada de mañana. Es una marca para gente que
trabaja de noche, programadores y creativos. La landing debe sentirse
como un editor de código: oscura, elegante y de alto rendimiento.
*/

const bitcount = Bitcount_Grid_Double({
  subsets: ["latin"],
  adjustFontFallback: true,
  fallback: ["monospace"],
});

export default function Home() {
  return (
    // Quitamos justify-center del padre para que las secciones fluyan hacia abajo
    <div className="flex flex-col items-center justify-center w-full custom-gradient">
      {/** Hero Section: Ocupa exactamente el 100% de la pantalla actual */}
      <section className="flex flex-col items-center justify-center gap-6 w-full min-h-screen max-w-2xl px-4 text-center">
        <div
          className="text-8xl font-light text-text tracking-tighter"
          style={bitcount.style}
        >
          VOID
        </div>
        <span className="text-2xl font-extrabold text-center text-primary">
          Coffee for those who <span className="text-secondary">never</span>{" "}
          sleep.
        </span>
        <button className="mt-4 bg-transparent border border-primary text-primary px-8 py-3 rounded-sm hover:bg-primary/10 transition-colors font-mono">
          <span>{">"} Initialize extraction</span>
        </button>
      </section>

      {/** Product Section: Empieza justo después del scroll */}
      <section className="flex flex-col items-center justify-center gap-12 max-w-md lg:max-w-6xl py-24 px-4 w-full">
        <h2 className="text-primary font-mono text-xl self-start md:self-start w-full">
          // current_inventory
        </h2>

        {/** Grid: Cambiamos de flex-col a grid para que no se vean como una torre infinita */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          <ProductCard
            title="v0id.dark_theme"
            specs="[ intensity: 95% ] [ latency: 0ms ]"
            description="Deep profile for long-running debug sessions."
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <ProductCard
            title="v0id.null_pointer"
            specs="[ caffeine: 0% ] [ status: idle ]"
            description="Clean decaf. For the post-deployment cooldown."
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <ProductCard
            title="v0id.buffer_overflow"
            specs="[ shots: +3 ] [ priority: critical ]"
            description="Triple-shot blend for emergency hotfixes."
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
        </div>
      </section>

      <footer className="py-20 text-text/50 font-mono text-sm">
        © {new Date().getFullYear()} V0ID_TERMINAL
      </footer>
    </div>
  );
}
