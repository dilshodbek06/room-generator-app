"use client";

import useStore from "@/store/store";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const themes = [
  { value: "coastal", imgUrl: "/images/themes/coastal.png" },
  { value: "modern", imgUrl: "/images/themes/modern.png" },
  { value: "professional", imgUrl: "/images/themes/professional.png" },
  { value: "tribal", imgUrl: "/images/themes/tribal.png" },
  { value: "tropical", imgUrl: "/images/themes/tropical.png" },
  { value: "vintage", imgUrl: "/images/themes/vintage.png" },
];

const ThemeForm = () => {
  const [selectedTheme, setSelectedTheme] = useState("");

  const { handleRoomTheme } = useStore();

  const handleClick = (value: string) => {
    setSelectedTheme(value);
    handleRoomTheme(value);
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      {themes.map((theme, index) => {
        return (
          <div
            onClick={() => handleClick(theme.value)}
            key={index}
            className={`cursor-pointer transition-all flex flex-col items-center gap-2 group relative`}
          >
            <Image
              src={theme.imgUrl}
              alt={theme.value}
              width={150}
              height={100}
              className={`rounded-sm group-hover:opacity-80`}
            />
            <p className={`font-semibold text-white`}>{theme.value}</p>
            {theme.value === selectedTheme && (
              <div className="absolute top-1 right-1 p-1 rounded-full bg-green-500 transition-all duration-300">
                <Check size={20} className=" text-white" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ThemeForm;
