import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src={`/svg/not-found.svg`}
        width={600}
        height={600}
        alt="Not Found"
        className="-translate-y-[2rem]"
      />
      <h1 className="text-4xl font-bold font-poppins mb-4">Not Found</h1>
      <Link href="/" className="px-4 py-2 bg-indigo-700 text-white rounded-xl">
        Return Home
      </Link>
    </div>
  );
}
