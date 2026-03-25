export default function TechnicalSpecs() {
  return (
    <section className="flex flex-col items-center justify-center gap-12 max-w-lg w-[90%] md:w-full lg:max-w-6xl py-24 px-4">
      <h2
        className="text-secondary font-mono text-xl self-start md:self-start w-full"
        id="technical_specs"
      >
        // technical_specifications
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full justify-center items-center">
        <p className="text-primary lg:px-8">
          V0ID is engineered for high-performance creative sessions. Our beans
          are roasted in small batches to ensure 99.9% uptime for your brain.
        </p>
        <div className="grid grid-cols-2 gap-4 text-primary">
          <h5 className="text-accent">Origin:</h5>
          <p>Main</p>
          <h5 className="text-accent">Dark Level:</h5>
          <p>Darkula</p>
          <h5 className="text-accent">Grind Size:</h5>
          <p>250kb</p>
          <h5 className="text-accent">Brew Method:</h5>
          <p>compiled</p>
        </div>
      </div>
    </section>
  );
}
