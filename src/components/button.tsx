import Link from "next/link";

interface ButtonProps {
  buttonName: string;
  title?: string;
  link?: string;
  scroll: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <div className="flex h-10 w-25 items-center justify-center rounded-sm bg-[#f3b77a] text-white opacity-75 transition duration-250 ease-in-out hover:opacity-100">
      <Link
        className="font-bold"
        title={props.title}
        href={props.link || "/"}
        scroll={props.scroll}
      >
        {props.buttonName}
      </Link>
    </div>
  );
}
