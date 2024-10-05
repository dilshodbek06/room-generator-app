import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { imageUrl, room, theme } = await req.json();
    console.log(imageUrl);

    const prompt = `Redesign the room in the image. The room is a ${room}, and the desired theme is ${theme}. Use the image as a reference to maintain the existing layout and structure of the room. Apply the ${theme} style by incorporating design elements such as colors, furniture, lighting, and décor that match the selected theme, while ensuring it fits the purpose of a ${room}.`;

    const res = await axios.post(
      `https://image.pollinations.ai/prompt/${prompt}`,
      {},
      { responseType: "arraybuffer" }
    );
    const blob = new Blob([res.data], { type: "image/png" });
    const newImageUrl = URL.createObjectURL(blob);

    return NextResponse.json({ url: newImageUrl });
  } catch (error) {
    console.log("[GENERATE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// description: `Redesign the room in the uploaded image. The room is a ${room}, and the desired theme is ${theme}. Use the image as a reference to maintain the existing layout and structure of the room. Apply the ${theme} style by incorporating design elements such as colors, furniture, lighting, and décor that match the selected theme, while ensuring it fits the purpose of a ${room}.`,
