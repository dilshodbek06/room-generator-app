"use client";

import useStore from "@/store/store";
import Image from "next/image";

const PreviewImage = () => {
  const { resultImageUrl, loading } = useStore();

  return (
    <div className="md:w-3/4 mx-auto">
      {resultImageUrl ? (
        <div className="relative md:w-[90%] mx-auto min-h-[18rem]">
          <Image
            alt="preview"
            src={resultImageUrl}
            fill
            className="block mx-auto rounded-md absolute"
          />
        </div>
      ) : (
        <div
          className={`bg-slate-600 ${
            loading && "animate-pulse"
          }  h-[16rem] w-full rounded-lg flex justify-center items-center`}
        >
          <Image
            alt="preview"
            src="/images/placeholder.svg"
            width={90}
            height={100}
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default PreviewImage;
