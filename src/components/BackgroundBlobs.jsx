"use client";
import React from "react";

export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Blob 1 */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-700 opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      {/* Blob 2 */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-sky-700 opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Blob 3 */}
      <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-indigo-700 opacity-10 rounded-full blur-3xl animate-blob"></div>
    </div>
  );
}
