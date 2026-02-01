import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - TamaFawx",
};

export default function Home() {
  return (
    <>
      <div className="px-8 py-6 md:px-30">
        <h1 className="text-2xl font-semibold">About Me</h1>
        <p className="mt-3 text-neutral-600">
          I&apos;m TamaFawx, people/fluffs always call me Manas. My real name is
          Fauzan Priatmana. I love Tama as fox, he&apos;s species is a hybrid of
          Fox, Dog, and Deer. His signatures are the red bowtie and his black
          hair.
        </p>

        <figure className="mt-3 flex flex-col items-center gap-4">
          <Image
            src={"/tamafawx/tamafawx-refsheet.jpg"}
            alt="TamaFawx Refsheet"
            width={768}
            height={768}
            className="rounded-2xl"
          />
          <p className="text-xs opacity-60 md:text-base">
            TamaFawx Refsheet (Version 3)
          </p>
        </figure>
      </div>
    </>
  );
}
