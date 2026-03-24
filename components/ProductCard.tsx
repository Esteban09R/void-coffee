export default function ProductCard(props: {
  title: string;
  specs: string;
  description: string;
  image: string;
}) {
  return (
    <div className="min-h-64 w-full bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-sm p-4 grid grid-rows-3">
      <img
        src={props.image}
        alt={`${props.title} image`}
        className="w-full h-full object-cover row-span-2"
      />
      <div className="row-span-1 flex flex-col gap-2">
        <h1 className="text-xl font-bold text-text">{props.title}</h1>
        <p className="text-sm text-primary">{props.description}</p>
        <p className="text-sm text-secondary">{props.specs}</p>
      </div>
    </div>
  );
}
