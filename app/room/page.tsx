import PreviewImage from "@/components/shared/preview-image";
import SelectForm from "@/components/shared/select-form";
import ThemeForm from "@/components/shared/theme-form";
import UploadImage from "@/components/shared/upload-image";
import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-20 px-10">
        <div className="flex flex-col items-center gap-8 md:w-1/3 ">
          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="font-bold text-white text-xl">
              Upload a photo of your room
            </h3>
            {/* <UploadDnd /> */}
            <UploadImage />
          </div>
          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="font-bold text-white text-xl">Select Room Type</h3>
            {/* <Select room type /> */}
            <SelectForm />
          </div>
          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="font-bold text-white text-xl">Select Room Theme</h3>
            {/* <ThemeOptions /> */}
            <ThemeForm />
          </div>
          {/* <GenerateBtn /> */}
          <div className="w-full flex justify-center">
            <button className="bg-gradient-to-br from-blue-600 to-purple-600 text-white focus-visible:outline-blue-600 dark:focus-visible:outline-blue-600 rounded-md inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-4 md:px-12 py-2 text-lg font-medium tracking-wide transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                className="size-4 "
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z"
                  clip-rule="evenodd"
                />
              </svg>
              Generate
            </button>
          </div>
        </div>
        <div className="md:w-2/3 w-full flex flex-col items-center pb-10">
          <div className="md:flex hidden flex-col gap-5 text-center">
            <h1 className="text-4xl text-white font-bold">
              Redesign your <span className="text-blue-500">room</span> in
              seconds
            </h1>
            <p className="text-xl text-white max-w-lg">
              Upload a room, specify the room type, and select your room theme
              to redesign.
            </p>
          </div>
          {/* result of image */}
          <div className="mt-8 w-full">
            <PreviewImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
