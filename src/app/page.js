"use client";

import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-geist px-16 py-6 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-6 max-w-7xl mx-auto">
        {/* Columna 1 (Más pequeña) */}
        <div className="flex flex-col space-y-4 col-span-2 mt-[4rem]">
          <div>
            <ProfileCard />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">Card 2</div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">Card 3</div>
        </div>

        {/* Columna 2 (Más grande) */}
        <div className="flex flex-col space-y-4 col-span-3">
          <div className="bg-gray-800 p-8 rounded-lg shadow-md h-40">
            Card 4 (Grande)
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-md h-40">
            Card 5 (Grande)
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-md h-40">
            Card 6 (Grande)
          </div>
        </div>

        {/* Columna 3 (Más pequeña) */}
        <div className="flex flex-col space-y-4 col-span-2">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">Card 7</div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">Card 8</div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">Card 9</div>
        </div>
      </div>
    </main>
  );
}
