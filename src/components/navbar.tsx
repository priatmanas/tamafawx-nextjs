import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center border-b border-neutral-200 px-32 py-6 md:justify-between dark:border-neutral-800">
      <div>
        <button className="text-xl font-bold">
          <Link href={"/"}>TamaFawx</Link>
        </button>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-7 px-10 text-base">
          <li className="hover:scale125 border-b-2 border-transparent px-2.5 py-1 text-neutral-600 opacity-60 transition duration-250 ease-in-out hover:-translate-y-1 hover:border-amber-600 hover:opacity-100 dark:text-neutral-200">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:scale125 border-b-2 border-transparent px-2.5 py-1 text-neutral-600 opacity-60 transition duration-250 ease-in-out hover:-translate-y-1 hover:border-amber-600 hover:opacity-100 dark:text-neutral-200">
            <Link href={"/#about"}>About</Link>
          </li>
          <li className="hover:scale125 border-b-2 border-transparent px-2.5 py-1 text-neutral-600 opacity-60 transition duration-250 ease-in-out hover:-translate-y-1 hover:border-amber-600 hover:opacity-100 dark:text-neutral-200">
            <Link href={"/"}>FAQ</Link>
          </li>
          <li className="hover:scale125 hidden border-b-2 border-transparent px-2.5 py-1 text-neutral-600 opacity-60 transition duration-250 ease-in-out hover:-translate-y-1 hover:border-amber-600 hover:opacity-100 dark:text-neutral-200">
            <Link href={"/"}>Find Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
