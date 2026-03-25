import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { Bitcount_Grid_Double } from "next/font/google";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUsForm";
import ContactUsForm from "@/components/ContactUsForm";
import TechnicalSpecs from "@/components/TechnicalSpecs";

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
          V0ID
        </div>
        <span className="text-2xl font-extrabold text-center text-primary">
          Coffee for those who <span className="text-accent">never</span> sleep.
        </span>
        <a
          className="mt-4 cursor-pointer decoration-none bg-transparent border border-primary text-primary px-8 py-3 rounded-sm hover:bg-primary/10 transition-colors font-mono"
          href="#current_inventory"
        >
          <span>{">"} See current inventory</span>
        </a>
        <Image
          src="/images/background.jpg"
          alt="Background image of coffee beans"
          width={1000}
          height={1000}
          className="w-full h-full object-cover fixed top-0 left-0 z-[-100] grayscale contrast-200 opacity-50 mix-blend-multiply"
        />
      </section>

      {/** Product Section: Empieza justo después del scroll */}
      <section className="flex flex-col items-center justify-center gap-12 max-w-lg w-[90%] md:w-full lg:max-w-6xl py-24 px-4">
        <h2
          className="text-secondary font-mono text-xl self-start md:self-start w-full"
          id="current_inventory"
        >
          // current_inventory
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          <ProductCard
            title="v0id.dark_theme"
            specs="[ intensity: 95% ] [ latency: 0ms ]"
            description="Deep profile for long-running debug sessions."
            image="/images/dark_theme.jpg"
          />
          <ProductCard
            title="v0id.null_pointer"
            specs="[ caffeine: 0% ] [ status: idle ]"
            description="Clean decaf. For the post-deployment cooldown."
            image="/images/null_pointer.jpg"
          />
          <ProductCard
            title="v0id.buffer_overflow"
            specs="[ shots: +3 ] [ priority: critical ]"
            description="Triple-shot blend for emergency hotfixes."
            image="/images/buffer_overflow.jpg"
          />
        </div>
      </section>

      <TechnicalSpecs />

      <section className="flex flex-col items-center justify-center gap-12 max-w-lg w-[90%] md:w-full lg:max-w-6xl py-24 px-4">
        <h2
          className="text-secondary font-mono text-xl self-start md:self-start w-full"
          id="contact_us"
        >
          // contact_us
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 w-full justify-center items-center">
          <form action="" className="flex flex-col gap-2">
            <p className="text-primary">
              Suscribe to our newsletter to get the latest updates.
            </p>
            <button type="submit" className="text-accent">
              [ Suscribe ]
            </button>
          </form>
          <p className="text-primary">
            If you have any questions, feel free to contact us.
          </p>
          <ContactUsForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
