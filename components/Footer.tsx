import { Bitcount_Grid_Double } from "next/font/google";

import Image from "next/image";

const bitcount = Bitcount_Grid_Double({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-12 max-w-lg w-[90%] md:w-full lg:max-w-6xl py-24 px-4">
      <div className="flex flex-row items-center gap-4">
        <Image
          src="/logo.svg"
          alt="V0ID Logo"
          width={60}
          height={60}
          className="opacity-80"
        />
        <div
          className="text-4xl font-light text-text tracking-tighter"
          style={bitcount.style}
        >
          V0ID
        </div>
      </div>
      <div>
        <p className="text-primary">Built by Reidan Team</p>
      </div>
      <div className="grid grid-cols-4 gap-12">
        <h5 className="text-primary col-span-1"> Connect: </h5>
        <ul className="flex flex-row gap-2 col-span-3 text-accent">
          <li>
            <a href="https://github.com/Esteban09R">{"[GitHub]"}</a>
          </li>
          <li>
            <a href="https://twitter.com/reidandev">{"[Twitter]"}</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/estebanrolon09/">
              {"[LinkedIn]"}
            </a>
          </li>
        </ul>
        <p className="text-primary col-span-4 text-center ">
          © {new Date().getFullYear()} Reidan Team
        </p>
      </div>
    </footer>
  );
}
