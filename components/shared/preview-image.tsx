import Image from "next/image";

const PreviewImage = () => {
  return (
    <div className="md:w-3/4 mx-auto">
      <div className="bg-slate-600 h-[16rem] w-full rounded-lg flex justify-center items-center">
        <Image
          alt="preview"
          src="/images/placeholder.svg"
          width={90}
          height={100}
          className="object-cover"
        />
      </div>
      {/* <Image
        alt="preview"
        src="/images/placeholder.svg"
        width={400}
        height={300}
        className="object-cover"
      /> */}
    </div>
  );
};

export default PreviewImage;
