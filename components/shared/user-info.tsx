"use client";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import React from "react";

function UserInfo() {
  const { user } = useUser();
  return !user ? (
    <Link
      href={"/room"}
      className="bg-violet-700 hover:opacity-90 rounded-lg text-white font-semibold px-5 py-3"
    >
      Login
    </Link>
  ) : (
    <UserButton />
  );
}

export default UserInfo;