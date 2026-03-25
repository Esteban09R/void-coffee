import { Bitcount_Grid_Double } from "next/font/google";

const bitcount = Bitcount_Grid_Double({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-12 max-w-lg w-[90%] md:w-full lg:max-w-6xl py-24 px-4">
      <div
        className="text-4xl font-light text-text tracking-tighter"
        style={bitcount.style}
      >
        V0ID
      </div>
      <div className="grid grid-cols-4 gap-12">
        <h5 className="text-primary col-span-1"> System: </h5>
        <ul className="flex flex-row gap-2 col-span-3 text-accent">
          <li>
            <a href="#">{"[Docs]"}</a>
          </li>
          <li>
            <a href="#">{"[API]"}</a>
          </li>
          <li>
            <a href="#">{"[Changelog]"}</a>
          </li>
        </ul>
        <h5 className="text-primary col-span-1"> Connect: </h5>
        <ul className="flex flex-row gap-2 col-span-3 text-accent">
          <li>
            <a href="#">{"[GitHub]"}</a>
          </li>
          <li>
            <a href="#">{"[Twitter]"}</a>
          </li>
          <li>
            <a href="#">{"[LinkedIn]"}</a>
          </li>
        </ul>
        <p className="text-primary col-span-4 text-center ">
          © {new Date().getFullYear()} V0ID_TERMINAL
        </p>
      </div>
    </footer>
  );
}
