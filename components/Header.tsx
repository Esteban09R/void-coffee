import Image from "next/image";
import { Bitcount_Grid_Double } from "next/font/google";

const bitcount = Bitcount_Grid_Double({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 backdrop-blur-md border-b border-primary/10 rounded-b-xl">
      <div className="flex flex-row items-center gap-4">
        <Image
          src="/logo.svg"
          alt="V0ID Logo"
          width={50}
          height={50}
          className="opacity-80"
        />
        <div
          className="text-4xl font-light text-text tracking-tighter"
          style={bitcount.style}
        >
          V0ID
        </div>
      </div>
    </header>
  );
}
