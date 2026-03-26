import Image from "next/image";

export default function ProductCard(props: {
  title: string;
  specs: Array<string>;
  description: string;
  image: string;
}) {
  return (
    <div className="group min-h-64 w-full bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-sm p-4 flex flex-col gap-4 hover:border-primary/50 hover:from-white/25 transition-colors duration-500">
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <Image
          src={props.image}
          alt={`${props.title} image`}
          fill
          sizes="100%"
          className="object-cover group-hover:scale-110 transition-transform duration-250"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold text-text">{props.title}</h1>
        <p className="text-sm text-primary">{props.description}</p>
        <span className="flex flex-row gap-2 flex-wrap">
          {props.specs.map((spec, index) => (
            <p key={index} className="text-sm text-accent whitespace-nowrap">
              {spec}
            </p>
          ))}
        </span>
      </div>
    </div>
  );
}
