import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { Bitcount_Grid_Double } from "next/font/google";
import Footer from "@/components/Footer";
import ContactUsForm from "@/components/ContactUsForm";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import Header from "@/components/Header";
import Animation from "@/components/Animation";
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
    /**Default homepage container */

    <div className="flex flex-col items-center justify-center w-full custom-gradient">
      <Header />

      <Image
        src="/images/background.webp"
        alt="Background image of coffee beans"
        width={1000}
        height={1000}
        priority
        className="w-full h-full object-cover fixed top-0 left-0 z-[-100] mix-blend-multiply bg-fade-in"
      />
      {/**Hero section */}
      <section className="flex flex-col items-center justify-center gap-6 w-full min-h-screen max-w-2xl px-4 text-center">
        <Animation delay={0} duration={0.5}>
          <div
            className="text-8xl font-light text-text tracking-tighter"
            style={bitcount.style}
          >
            V0ID
          </div>
        </Animation>
        <Animation delay={0.2} duration={0.5}>
          <span className="text-2xl font-extrabold text-center text-primary">
            Coffee for those who <span className="text-accent">never</span>{" "}
            sleep.
          </span>
        </Animation>
        <Animation delay={0.5} duration={0.5}>
          <a
            className="mt-4 cursor-pointer decoration-none bg-transparent border border-primary text-primary px-8 py-3 my-3 rounded-sm hover:bg-primary/10 transition-colors font-mono"
            href="#current_inventory"
          >
            <span>{">"} See current inventory</span>
          </a>
        </Animation>
        {/** Background image, fixed to the viewport */}
      </section>

      {/** Product Section: Empieza justo después del scroll */}
      <section className="flex flex-col items-center justify-center gap-12 max-w-lg w-[90%] lg:w-full lg:max-w-6xl py-24 px-4">
        <h2
          className="text-secondary font-mono text-xl self-start lg:self-start w-full text-center"
          id="current_inventory"
        >
          // current_inventory
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full lg:w-11/12">
          <ProductCard
            title="v0id.dark_theme"
            specs={[
              "[ intensity: 95% ]",
              "[ latency: 0ms ]",
              "[ price = 15$; ]",
            ]}
            description="Deep profile for long-running debug sessions."
            image="/images/dark_theme.webp"
          />
          <ProductCard
            title="v0id.null_pointer"
            specs={["[ caffeine: 0% ]", "[ status: idle ]", "[ price = 12$; ]"]}
            description="Clean decaf. For the post-deployment cooldown."
            image="/images/null_pointer.webp"
          />
          <ProductCard
            title="v0id.buffer_overflow"
            specs={[
              "[ shots: +3 ]",
              "[ priority: critical ]",
              "[ price = 18$; ]",
            ]}
            description="Triple-shot blend for emergency hotfixes."
            image="/images/buffer_overflow.webp"
          />
        </div>
      </section>

      {/** Technical Specs Section */}
      <section className="flex flex-col items-center justify-center gap-12 max-w-lg lg:w-full lg:max-w-6xl py-24 px-4">
        <TechnicalSpecs />
      </section>

      {/** Contact Us Section */}
      <section className="flex flex-col items-center justify-center gap-12 max-w-lg lg:w-full lg:max-w-6xl py-24 px-4">
        <h2
          className="text-secondary font-mono text-xl self-start md:self-start w-full text-center"
          id="contact_us"
        >
          // contact_us
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:w-11/12 justify-center items-center">
          <p className="text-primary flex-1">
            If you have any questions about our blends or need a bulk order for
            your startup, send us a message. We respond in less than 200ms (or
            whatever it takes for the coffee to kick in).
          </p>
          <div className="flex-1 w-full">
            <ContactUsForm />
          </div>
        </div>
      </section>

      {/** Footer Section */}
      <Footer />
    </div>
  );
}
