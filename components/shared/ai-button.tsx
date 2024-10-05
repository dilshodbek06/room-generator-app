"use client";

import { useConfettiStore } from "@/store/confetti-store";
import useStore from "@/store/store";
import axios from "axios";
import { useState } from "react";

const AiButton = () => {
  const [loading, setLoading] = useState(false);

  const {
    roomTheme,
    roomType,
    handleResultImage,
    handleResetForm,
    handleLoading,
  } = useStore();

  const confetti = useConfettiStore();

  const handleGenerate = async () => {
    try {
      setLoading(true);
      handleLoading(true);
      // const result = await axios.post(`/api/generate`, {
      //   theme: roomTheme,
      //   room: roomType,
      //   imageUrl: uploadedImageUrl,
      // });
      const prompt = `Redesign the room in the image. The room is a ${roomType}, and the desired theme is ${roomTheme}. Use the image as a reference to maintain the existing layout and structure of the room.`;
      const res = await axios.post(
        `https://image.pollinations.ai/prompt/${prompt}`,
        {},
        { responseType: "arraybuffer" }
      );
      const blob = new Blob([res.data], { type: "image/png" });
      const newImageUrl = URL.createObjectURL(blob);
      handleResultImage(newImageUrl);
      confetti.onOpen();
      handleResetForm();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      handleLoading(false);
    }
  };

  return (
    <button
      disabled={!roomTheme || !roomType || loading}
      onClick={handleGenerate}
      className="bg-gradient-to-br from-blue-600 to-purple-600 text-white focus-visible:outline-blue-600 dark:focus-visible:outline-blue-600 rounded-md inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-4 md:px-12 py-2 text-lg font-medium tracking-wide transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        className={`size-4 ${loading && "animate-bounce"}`}
      >
        <path
          fillRule="evenodd"
          d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z"
          clipRule="evenodd"
        />
      </svg>
      {loading ? "loading..." : "Generate"}
    </button>
  );
};

export default AiButton;
