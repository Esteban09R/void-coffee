"use client";
import { motion } from "framer-motion";

export default function Animation({
  children,
  delay,
  duration,
}: {
  children: React.ReactNode;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 1.1, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: duration, delay: delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
