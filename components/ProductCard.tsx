import Image from "next/image";

export default function ProductCard(props: {
  title: string;
  specs: string;
  description: string;
  image: string;
}) {
  return (
    <div className="min-h-64 w-full bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-sm p-4 grid grid-rows-3 gap-4">
      <Image
        src={props.image}
        alt={`${props.title} image`}
        width={400}
        height={400}
        className="w-full h-full object-cover row-span-2 rounded-lg aspect-video grayscale contrast-150"
      />
      <div className="row-span-1 flex flex-col gap-1">
        <h1 className="text-xl font-bold text-text">{props.title}</h1>
        <p className="text-sm text-primary">{props.description}</p>
        <p className="text-sm text-accent">{props.specs}</p>
      </div>
    </div>
  );
}
