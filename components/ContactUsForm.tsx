export default function ContactUsForm() {
  return (
    <form className="flex flex-col gap-4 bg-white/5 backdrop-blur-md border border-white/5 rounded-sm p-4 w-full">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="bg-white/5 backdrop-blur-md border border-white/5 rounded-sm p-4 "
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="bg-white/5 backdrop-blur-md border border-white/5 rounded-sm p-4 "
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        className="bg-white/5 backdrop-blur-md border border-white/5 rounded-sm p-4 "
      ></textarea>
      <button type="submit" className="text-accent">
        [ Send ]
      </button>
    </form>
  );
}
