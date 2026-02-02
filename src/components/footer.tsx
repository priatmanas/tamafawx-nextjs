import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto border-t border-neutral-200 px-8 py-16 md:px-16">
      <div className="flex flex-col">
        <div className="flex flex-col justify-between gap-12">
          {/* Footer Content */}
          <div>
            <div className="flex flex-wrap justify-between gap-10">
              <div className="flex flex-col gap-4">
                <div className="animate-bounce">
                  <a className="text-xl font-bold" href="">
                    TamaFawx
                  </a>
                </div>
                <div>
                  <p className="text-sm opacity-60">
                    &copy; 2026{" "}
                    <span className="font-semibold underline">TamaFawx</span>.
                    All rights reserved.
                  </p>
                  <p className="text-sm opacity-60">
                    Developed and create by{" "}
                    <span className="font-semibold underline">
                      Fawzan Priatmana
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-16 xl:gap-16">
                <section>
                  <h2 className="text-base font-semibold">Resources</h2>
                  <ul className="mt-3 flex flex-col gap-2">
                    <li className="opacity-60 transition duration-250 ease-in-out hover:opacity-100">
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li className="opacity-60 transition duration-250 ease-in-out hover:opacity-100">
                      <Link href={"/about"}>About</Link>
                    </li>
                    <li className="opacity-60 transition duration-250 ease-in-out hover:opacity-100">
                      ToS
                    </li>
                    <li className="opacity-60 transition duration-250 ease-in-out hover:opacity-100">
                      FAQ
                    </li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-base font-semibold">Find Me</h2>
                  <ul className="mt-3 flex flex-col gap-2 opacity-70">
                    <li className="opacity-60 transition duration-250 ease-in-out hover:opacity-100">
                      <Link href={"https://x.com/tamafawx"} target="_blank">
                        X (Formerly Twitter)
                      </Link>
                    </li>
                    <li className="opacity-60 transition duration-250 ease-in-out hover:opacity-100">
                      <Link href={"https://t.me/tamafawx"} target="_blank">
                        Telegram
                      </Link>
                    </li>
                    <li className="opacity-60 transition duration-250 ease-in-out hover:opacity-100">
                      <Link
                        href={"https://www.instagram.com/tamafawx/"}
                        target="_blank"
                      >
                        Instagram
                      </Link>
                    </li>
                    <li className="opacity-60 transition duration-250 ease-in-out hover:opacity-100">
                      <Link
                        href={"https://bsky.app/profile/tamafawx.bsky.social"}
                        target="_blank"
                      >
                        Bluesky
                      </Link>
                    </li>
                    <li className="hidden opacity-60 transition duration-250 ease-in-out hover:opacity-100">
                      <Link href={"/"}>Find more</Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
          <p className="flex justify-center text-center text-sm italic opacity-60">
            &quot;Grow better, find your calling. Be better than I ever was. For
            now, I am wandering far away. When you&apos;re grown, you will
            understand :3&quot;
            {/* &quot;Come on, get on up. We&apos;re wild and we
            can&apos;t be tamed. And we&apos;re turnin&apos; the floor into. A
            zoo, ooh, ooh&quot; */}
          </p>
        </div>
      </div>
    </footer>
  );
}
