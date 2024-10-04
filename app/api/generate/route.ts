import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { imageUrl, room, theme } = await req.json();

    const headers = {
      "Content-Type": "application/json",
      "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
    };
    const apiUrl = "https://deep-image.ai/rest_api/process_result";

    const requestData = {
      url: imageUrl,
      width: 1024,
      height: 1024,
      background: {
        generate: {
          description: `A photo of a ${theme} ${room}, 4k photo, highly detailed`,
          adapter_type: "generate_background",
        },
      },
    };

    const response = await axios.post(apiUrl, requestData, { headers });
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[GENERATE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// description: `Redesign the room in the uploaded image. The room is a ${room}, and the desired theme is ${theme}. Use the image as a reference to maintain the existing layout and structure of the room. Apply the ${theme} style by incorporating design elements such as colors, furniture, lighting, and décor that match the selected theme, while ensuring it fits the purpose of a ${room}.`,
