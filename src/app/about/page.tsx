import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me - TamaFawx",
};

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-5 px-8 py-8 md:px-75 md:py-18">
        {/* Fauzan Priatmana */}
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold md:text-3xl">👤 About Me!</h1>
            <div className="mb-5 h-1 w-25 rounded-full bg-[#f3b77a]"></div>
            <p className="text-base text-neutral-600 dark:text-neutral-300">
              The name is{" "}
              <span className="text-neutral font-bold dark:text-white">
                Fauzan Priatmana
              </span>
              . A CS student who still learning at{" "}
              <span className="relative border-b-2 border-transparent text-amber-600 transition duration-500 ease-in-out hover:border-b-amber-600">
                <Link href={"https://iwima.ac.id/"} target="_blank">
                  Widya Pratama Institute
                </Link>
              </span>{" "}
              Currently still living in Central Java, Indonesia.
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-300">
              Right now still unemployed and still learning{" "}
              <span className="text-amber-600">basic computer stuff</span> and
              trying
              <span className="text-amber-600"> digital furry art</span>.
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-300">
              I&apos;m down and trying on couple of mission such as solving a
              complex problems, optimizing productivity, and reaching out to be
              success. In other hand... I try to help people and make people
              happy.
            </p>
          </div>
          <div className="flex h-auto w-150 flex-col items-center gap-6 rounded-2xl p-4">
            <Image
              src={"/fawzanpriatmana/fawzanpriatmana-circle.png"}
              alt="Fawzan Priatmana Picture"
              width={512}
              height={512}
              className="h-55 w-55 rounded-full shadow-2xl"
            />
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold">Fauzan Priatmana</p>
              <p className="text-base text-neutral-800 dark:text-neutral-200">
                / faʊzɑːnpriːætmɑːnə /
              </p>
            </div>
          </div>
        </div>

        {/* TamaFawx */}
        <div className="flex flex-col items-center gap-2.5 md:flex-row">
          <div className="flex h-auto w-225 flex-col items-center gap-6 rounded-2xl p-10">
            <Image
              src={"/tamafawx/tamafawx-circle.png"}
              alt="TamaFawx Picture"
              width={512}
              height={512}
              className="h-45 w-45 rounded-full shadow-2xl"
            />
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold">Maximilian Tama</p>
              <p className="text-base text-neutral-800 dark:text-neutral-200">
                / mæksɪmɪljən tɑːmɑː /
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold md:text-xl">🦊 My Alter</h2>
            <div className="mb-5 h-1 w-25 rounded-full bg-[#f3b77a]"></div>
            <p className="text-base text-neutral-600 dark:text-neutral-300">
              Tama the silly fox-boy! This is my online and my otherself that
              make me comfortable since 2018. His name is Maximilian Tama, or
              shorten name is Tama. The OG fluffs will remember that his name is
              Manas. He always make me inspired to do something and spark my
              imagination.{" "}
              <span className="text-neutral bg-neutral invisible italic transition duration-250 ease-in-out hover:bg-[#fafafa] md:visible dark:bg-[#fafafa] dark:text-[#fafafa] dark:hover:bg-[#141414]">
                Thank you Tama~
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
