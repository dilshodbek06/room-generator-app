"use client";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import React from "react";

function UserInfo() {
  const { user } = useUser();
  return !user ? (
    <Link
      href={"/sign-in"}
      className="bg-violet-700 hover:opacity-90 rounded-lg text-white font-semibold px-3 py-2 md:px-5 md:py-3 text-sm md:text-base"
    >
      Login
    </Link>
  ) : (
    <UserButton />
  );
}

export default UserInfo;
