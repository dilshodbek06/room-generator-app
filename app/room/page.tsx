import AiButton from "@/components/shared/ai-button";
import PreviewImage from "@/components/shared/preview-image";
import SelectForm from "@/components/shared/select-form";
import ThemeForm from "@/components/shared/theme-form";
import UploadImage from "@/components/shared/upload-image";

const RoomPage = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-20 px-7 md:px-10">
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
            <AiButton />
          </div>
        </div>
        <div className="md:w-2/3 w-full flex flex-col items-center pb-10">
          <div className="md:flex hidden flex-col gap-5 text-center">
            <h1 className="text-4xl text-white font-bold">
              Redesign your <span className="text-violet-600">room</span> in
              seconds
            </h1>
            <p className="text-xl text-white max-w-lg">
              Upload a room image, choose the room type, and pick a design theme
              to transform your space.
            </p>
          </div>
          {/* result of image */}
          <div className="md:mt-8  w-full">
            <PreviewImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
