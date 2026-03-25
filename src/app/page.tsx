import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/button";

export const metadata: Metadata = {
  title: "Home - TamaFawx",
  description: "TamaFawx Website",
};

export default function Home() {
  return (
    <>
      <main className="grid-background flex flex-col-reverse items-center justify-center overflow-hidden px-6 md:min-h-[calc(100vh-80px)] md:flex-row md:gap-18">
        <div draggable="false" className="self-center leading-none md:self-end">
          <Image
            src={"/tamafawx/test.png"}
            alt="TamaFawx Banner"
            width={1080}
            height={1920}
            className="h-auto w-100 md:w-125"
            draggable="false"
          />
        </div>

        <div className="flex flex-col gap-6 py-10 md:py-0">
          <div>
            <h1 className="text-xl font-semibold text-neutral-600 md:pb-2 md:text-4xl dark:text-neutral-400">
              Hi There
            </h1>

            <div className="flex gap-1 transition duration-500 ease-in-out hover:translate-y-2">
              <h1 className="text-2xl font-semibold text-neutral-600 md:text-6xl dark:text-neutral-400">
                I&apos;m{" "}
              </h1>
              <h1 className="text-neutral relative origin-bottom-left border-b-2 border-transparent text-2xl font-bold transition duration-500 ease-in-out hover:scale-x-125 hover:scale-y-125 hover:border-amber-600 md:text-6xl dark:text-neutral-200">
                TamaFawx
              </h1>
            </div>
          </div>

          <p className="mt-2 text-neutral-600 md:w-125 md:text-xl dark:text-neutral-400">
            I&apos;m a 19 y/o Computer Science student with a passion for
            building things. <span className="italic">Nice to meet you~</span>{" "}
            :3
          </p>

          <div className="hover-3d">
            <div className="card mt-2 h-37.5 w-auto rounded-tr-2xl rounded-b-2xl border border-neutral-200 bg-neutral-100 px-6 py-6 md:h-auto md:w-100 dark:border-neutral-900 dark:bg-neutral-800">
              <div className="mb-3 flex items-center gap-3">
                <Image
                  src={"/tamafawx/tamafawx-circle.png"}
                  alt="TamaFawx Profile"
                  width={512}
                  height={512}
                  className="h-auto w-10 md:w-12.5"
                  draggable="false"
                />
                <p className="text-l font-bold md:text-xl" title="TamaFawx">
                  TamaFawx
                </p>
              </div>
              <p className="text-sm md:text-base">
                Expected to be many bug in this website. <br />
                Let me know if something broke &lt;/3
              </p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </main>
      <section
        id="about"
        className="flex flex-col justify-center gap-5 px-8 py-16 md:px-75 md:py-28"
      >
        <h1 className="text-2xl font-semibold md:text-3xl">
          🦊 A little bit about myself...
        </h1>
        <div className="mb-5 h-1 w-25 rounded-full bg-[#f3b77a]"></div>
        <p className="text-base text-neutral-600 md:text-lg dark:text-neutral-300">
          I&apos;m{" "}
          <span className="text-neutral font-bold dark:text-white">
            Fauzan Priatmana
          </span>
          , also known as{" "}
          <span className="text-neutral font-bold dark:text-white">
            TamaFawx
          </span>{" "}
          (myself in online world). A Computer Science student who still study
          at{" "}
          <span className="relative border-b-2 border-transparent text-amber-600 transition duration-500 ease-in-out hover:border-b-amber-600">
            <Link href={"https://iwima.ac.id/"} target="_blank">
              Institut Widya Pratama
            </Link>
          </span>
          . Just an ordinary fox-boy who loves to explore and learn something
          new.
        </p>
        <p className="text-base text-neutral-600 md:text-lg dark:text-neutral-300">
          Don&apos;t forget to give me a{" "}
          <span className="text-neutral font-bold dark:text-white">
            &quot;Hi! 👋🏼&quot;
          </span>{" "}
          or you can ask me something on my social media. Very active on{" "}
          <span className="relative border-b-2 border-transparent text-amber-600 transition duration-500 ease-in-out hover:border-b-amber-600">
            <Link href={"https://t.me/tamafawx"} target="_blank">
              Telegram
            </Link>
          </span>{" "}
          and{" "}
          <span className="relative border-b-2 border-transparent text-amber-600 transition duration-500 ease-in-out hover:border-b-amber-600">
            <Link
              href={"https://discord.com/users/395756060931260446"}
              target="_blank"
            >
              Discord
            </Link>
          </span>
          .
        </p>
        <Button
          title="Click to learn about me!"
          buttonName="More"
          link={"/about"}
          scroll={true}
        />
      </section>
    </>
  );
}
