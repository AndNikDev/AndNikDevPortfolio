import React from "react";

export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        role="presentation"
        className="absolute top-[-10%] left-[-10%] size-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl animate-blob-pulse delay-0"
      ></div>

      <div
        role="presentation"
        className="absolute top-[40%] right-[-10%] size-[400px] bg-cyan-500/70 opacity-25 rounded-full blur-3xl animate-blob-pulse delay-2000"
      ></div>

      <div
        role="presentation"
        className="absolute bottom-[-10%] left-[30%] size-[400px] bg-red-700/60 opacity-25 rounded-full blur-3xl animate-blob-pulse delay-4000"
      ></div>
    </div>
  );
}
