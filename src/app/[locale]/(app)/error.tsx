"use client";
import React from "react";

export default function Error() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        This Page not Found try another url
      </h1>
      <p>Failed to fetch meal data</p>
    </main>
  );
}
