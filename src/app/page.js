"use client";

import ProfileCard from "@/components/ProfileCard";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import NewSkills from "@/components/NewSkills";




export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-white font-geist px-6 py-6 pt-[3rem]">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 max-w-10xl mx-auto">
          {/* Columna 1 (Más pequeña) */}
          <div className="flex flex-col space-y-4 col-span-3 mt-[2.5rem] ">
            <div className="border border-zinc-600 rounded-md shadow-md p-6 mt-10">
              <ProfileCard />
            </div>
            <div className="border border-zinc-600 rounded-md shadow-md p-6"><AboutMe /></div>
          </div>

          {/* Columna 2 (Más grande) */}
          <div className="flex flex-col space-y-4 col-span-5">
            <div className="border border-zinc-600 p-8 rounded-md shadow-md h-40">
              <Experience />
            </div>
            <div className="border border-zinc-600 p-8 rounded-md shadow-md h-40">
              <Projects />
            </div>
            <div className="border border-zinc-600 p-8 rounded-md shadow-md h-40">
              opcional partir este en dos, pero decido despues
            </div>
          </div>

          {/* Columna 3 (Más pequeña) */}
          <div className="flex flex-col space-y-4 col-span-2">
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
    </>

  );
}
