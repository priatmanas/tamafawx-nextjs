import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home - TamaFawx",
  description: "TamaFawx Website",
};

export default function Home() {
  return (
    <>
      <div className="py-8 md:py-18">
        <div className="flex flex-col items-center gap-12 px-4 md:flex-row md:justify-center">
          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-40 rounded-2xl md:max-w-55">
              <Image
                src={"/tamafawx-circle.png"}
                alt="TamaFawx Profile Picture"
                width={1080}
                height={1080}
              />
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-semibold">I&apos;m TamaFawx</h1>
            <p className="mt-3 w-full max-w-prose md:w-125">
              I&apos;m a 19-year-old Computer Science student with a passion for
              building things. Nice to meet you! :3
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
