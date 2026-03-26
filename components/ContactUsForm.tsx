"use client";
import { sendEmail } from "@/lib/handleSendEmail";
import { useState } from "react";

function ContactUsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      await sendEmail(formData);
      setIsSubmitted(true);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 bg-white/5 backdrop-blur-md border border-white/5 rounded-sm p-4 w-full"
      onSubmit={handleSendEmail}
    >
      <label htmlFor="name" className="text-accent">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="$ >"
        className="bg-white/5 backdrop-blur-md border border-white/5 rounded-sm p-4 "
      />
      <label htmlFor="email" className="text-accent">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="$ >"
        className="bg-white/5 backdrop-blur-md border border-white/5 rounded-sm p-4 "
      />
      <label htmlFor="message" className="text-accent">
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="$ >"
        className="bg-white/5 backdrop-blur-md border border-white/5 rounded-sm p-4 "
      ></textarea>
      {!isSubmitted && (
        <button type="submit" className="text-accent p-4 cursor-pointer">
          {isSubmitting ? "[ Sending... ]" : "[ Send ]"}
        </button>
      )}
      {isSubmitted && (
        <p className="text-accent font-mono text-center">
          {"> "} status: 200 OK. Message delivered.
        </p>
      )}
      {error && (
        <p className="text-red-500 font-mono text-center">
          {"> "} status: 500 Internal Server Error. Message not delivered.
        </p>
      )}
    </form>
  );
}

export default ContactUsForm;
