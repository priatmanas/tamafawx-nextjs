import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center border-b border-neutral-200 px-16 py-6 md:justify-between">
      <div>
        <button className="text-xl font-bold">
          <Link href={"/"}>TamaFawx</Link>
        </button>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-7 px-10 text-base">
          <li className="px-2.5 py-1 opacity-60 transition duration-250 ease-in-out hover:opacity-100">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="px-2.5 py-1 opacity-60 transition duration-250 ease-in-out hover:opacity-100">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="px-2.5 py-1 opacity-60 transition duration-250 ease-in-out hover:opacity-100">
            <Link href={"/"}>FAQ</Link>
          </li>
          <li className="hidden px-2.5 py-1 opacity-60 transition duration-250 ease-in-out hover:opacity-100">
            <Link href={"/"}>Find Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
