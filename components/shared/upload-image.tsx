"use client";

import { IKUpload, ImageKitProvider } from "imagekitio-next";
import { useState } from "react";
import CustomImage from "./custom-image";
import Loading from "./loading";
import useStore from "@/store/store";

const UploadImage = () => {
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { handleUploadImage } = useStore();

  const authenticator = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/image-auth");

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error}`);
    }
  };

  const onError = (err: unknown) => {
    console.log("Error", err);
    setLoading(false);
  };

  const onSuccess = (res: { url: string }) => {
    setUrl(res.url);
    setLoading(false);
    handleUploadImage(res.url);
  };

  const onUploadStart = () => {
    setLoading(true);
  };

  return (
    <div className="w-full">
      {url ? (
        <div className=" md:w-3/4 mx-auto relative min-h-48">
          <CustomImage
            className="object-cover mx-auto rounded"
            src={url}
            alt="image"
          />
          <button
            onClick={() => setUrl(null)}
            className="bg-red-500 hover:bg-red-600 text-white text-xs font-medium me-2 px-2.5 py-1 rounded-full absolute top-1 right-0"
          >
            x
          </button>
        </div>
      ) : (
        <ImageKitProvider
          urlEndpoint={urlEndpoint}
          publicKey={publicKey}
          authenticator={authenticator}
        >
          {loading ? (
            <Loading />
          ) : (
            <label
              htmlFor="upload"
              className="bg-gray-800 hover:bg-slate-900/55 text-white font-semibold text-base rounded max-w-lg w-full h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 hover:border-gray-50 border-dashed mx-auto font-[sans-serif]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 mb-2 fill-white"
                viewBox="0 0 32 32"
              >
                <path
                  d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                  data-original="#000000"
                />
                <path
                  d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                  data-original="#000000"
                />
              </svg>
              Upload file
              <p className="text-xs font-medium text-gray-200 mt-2 text-center">
                PNG, JPG SVG, WEBP, and GIF are Allowed.
              </p>
              <IKUpload
                id="upload"
                className="hidden"
                useUniqueFileName
                onError={onError}
                onSuccess={onSuccess}
                onUploadStart={onUploadStart}
              />
            </label>
          )}
        </ImageKitProvider>
      )}
    </div>
  );
};

export default UploadImage;
