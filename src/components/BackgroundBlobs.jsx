import React from "react";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]" aria-hidden="true">
      {/* Top left purple */}
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-purple-600/20 blur-[100px] mix-blend-screen animate-blob" />
      
      {/* Middle right cyan */}
      <div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-cyan-600/20 blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />
      
      {/* Bottom center emerald/blue */}
      <div className="absolute -bottom-[20%] left-[10%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-blue-600/10 blur-[100px] mix-blend-screen animate-blob animation-delay-4000" />
    </div>
  );
}
