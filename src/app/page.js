"use client";

import Experience from "@/components/Experience";
import NewSkills from "@/components/NewSkills";
import ProfileCard from "@/components/ProfileCard";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-geist px-6 py-6 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 max-w-10xl mx-auto">
        {/* Columna 1 (Más pequeña) */}
        <div className="flex flex-col space-y-4 col-span-3 mt-[4rem] ">
          <div className="border border-zinc-600 rounded-md shadow-md p-6">
            <ProfileCard />
          </div>
          <div className="border border-zinc-600 rounded-md shadow-md p-6">Sobre Mí</div>
        </div>

        {/* Columna 2 (Más grande) */}
        <div className="flex flex-col space-y-4 col-span-4">
          <div className="border border-zinc-600 p-8 rounded-md shadow-md h-40">
            <Experience />
          </div>
          <div className="border border-zinc-600 p-8 rounded-md shadow-md h-40">
            Proyectos
          </div>
          <div className="border border-zinc-600 p-8 rounded-md shadow-md h-40">
            opcional partir este en dos, pero decido despues
          </div>
        </div>

        {/* Columna 3 (Más pequeña) */}
        <div className="flex flex-col space-y-4 col-span-3">
          <div className="border border-zinc-600 rounded-md shadow-md p-6">
            <Skills />
          </div>
          <div className="border border-zinc-600 rounded-md shadow-md p-6">
            <NewSkills />
          </div>
          <div className="border border-zinc-600 rounded-md shadow-md p-6">Card 9</div>
        </div>
      </div>
    </main>
  );
}
