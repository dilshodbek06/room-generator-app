import CompareSlider from "@/components/shared/compare-slider";
import CookieBanner from "@/components/shared/cookie-banner";
import Link from "next/link";

export default function Home() {
  return (
    <main className="my-auto flex gap-10 px-11 pt-11 pb-2 lg:flex-row flex-col justify-center lg:justify-around items-center">
      <div className="flex relative max-w-xl flex-col items-center gap-5 gradiant-bg">
        <h1 className="text-white text-5xl font-bold text-center ">
          Redesign your rooms in seconds{" "}
          <span className="text-blue-700">using AI</span>
        </h1>
        <p className="text-gray-500 text-lg text-center">
          Take a picture of a room and instantly redesign it in 8+ different
          themes. Join thousands of happy customers and remodel your room today!
        </p>
        <Link href={"/room"}>
          <button className="bg-violet-800 hover:opacity-90 rounded-lg text-white font-semibold px-5 py-3">
            Redesign your room
          </button>
        </Link>
      </div>
      <div>
        <CompareSlider />
      </div>
      <CookieBanner />
    </main>
  );
}
