import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home - TamaFawx",
  description: "TamaFawx Website",
};

export default function Home() {
  return (
    <>
      <main className="bg-grid flex flex-col-reverse items-center justify-center overflow-hidden bg-neutral-100 px-6 md:min-h-[calc(100vh-80px)] md:flex-row md:gap-18">
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
            <h1 className="text-xl font-semibold text-neutral-600 md:pb-2 md:text-4xl">
              Hi There
            </h1>

            <div className="flex gap-1 transition duration-500 ease-in-out hover:translate-y-2">
              <h1 className="text-2xl font-semibold text-neutral-600 md:text-6xl">
                I&apos;m{" "}
              </h1>
              <h1 className="text-neutral relative origin-bottom-left border-b-2 border-transparent text-2xl font-bold transition duration-500 ease-in-out hover:scale-x-125 hover:scale-y-125 hover:border-amber-600 md:text-6xl">
                TamaFawx
              </h1>
            </div>
          </div>

          <p className="mt-4 text-neutral-600 md:w-125 md:text-xl">
            I&apos;m a 19 y/o Computer Science student with a passion for
            building things. <span className="italic">Nice to meet you~</span>{" "}
            :3
          </p>
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
        <p className="text-base text-neutral-600 md:text-lg">
          I&apos;m <span className="text-neutral">Fauzan Priatmana</span>, also
          known as <span className="text-neutral">TamaFawx</span> (myself in
          online world). A Computer Science student who still study at{" "}
          <span className="relative border-b-2 border-transparent text-amber-600 transition duration-500 ease-in-out hover:border-b-amber-600">
            <Link href={"https://iwima.ac.id/"} target="_blank">
              Institut Widya Pratama
            </Link>
          </span>
          . Just an ordinary fox-boy who loves to explore and learn something
          new.
        </p>
        <p className="text-base text-neutral-600 md:text-lg">
          Don&apos;t forget to give me a{" "}
          <span className="text-neutral">&quot;Hi! 👋🏼&quot;</span> or you can
          ask me something on my social media. Very active on{" "}
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
      </section>

      <section className="bg-[#f3b77a] px-8 py-16 md:px-75 md:py-28">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam
          unde minima delectus, sit voluptatum nulla nostrum corrupti labore
          soluta excepturi provident, quos omnis saepe, dolorem velit ullam.
          Maxime vitae temporibus deleniti dignissimos quo reprehenderit eius
          dolor alias libero hic odio mollitia, aut nulla quisquam nihil soluta
          ab aspernatur dolorum fugit atque corrupti quae quis? Harum delectus
          molestias, velit pariatur ullam quod amet ratione nihil tempora
          obcaecati in cupiditate sed, neque suscipit, rem libero temporibus?
          Eaque sint, quas ratione maxime quasi necessitatibus laboriosam,
          repellat porro in, vitae quisquam praesentium nisi reprehenderit?
          Eius, excepturi reprehenderit distinctio officia quidem doloremque
          voluptatum aut.
        </p>
      </section>
    </>
  );
}
