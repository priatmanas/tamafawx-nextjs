"use client";
import Transition from "@/utils/transition";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <Transition key={pathname}>{children}</Transition>
    </AnimatePresence>
  );
}
