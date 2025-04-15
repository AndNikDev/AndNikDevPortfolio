"use client";

import ProfileCard from "@/components/ProfileCard";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import NewSkills from "@/components/NewSkills";
import Phrase from "@/components/Phrase";

export default function Home() {
  return (
    <>
      <main className="min-h-screen text-white font-geist px-4 py-6 pt-[3rem]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
            {/* Columna 1 */}
            <div className="flex flex-col space-y-4 md:col-span-3 items-center md:items-start mt-20">
              <div className="border border-zinc-600 rounded-md shadow-md p-6 w-full max-w-md">
                <ProfileCard />
              </div>
              <div className="border border-zinc-600 rounded-md shadow-md p-6 w-full max-w-md">
                <AboutMe />
              </div>
            </div>

            {/* Columna 2 */}
            <div className="flex flex-col space-y-4 md:col-span-5 items-center md:items-start">
              <div className="border border-zinc-600 p-8 rounded-md shadow-md w-full max-w-3xl">
                <Experience />
              </div>
              <div className="border border-zinc-600 p-8 rounded-md shadow-md w-full max-w-3xl">
                <Projects />
              </div>
              {/* <div className="border border-zinc-600 p-8 rounded-md shadow-md h-40 w-full max-w-3xl">
                opcional partir este en dos, pero decido despues
              </div> */}
            </div>

            {/* Columna 3 */}
            <div className="flex flex-col space-y-4 md:col-span-2 items-center md:items-start">
              <div className="border border-zinc-600 rounded-md shadow-md p-6 w-full max-w-sm">
                <Skills />
              </div>
              <div className="border border-zinc-600 rounded-md shadow-md p-6 w-full max-w-sm">
                <NewSkills />
              </div>
              <div className="border border-zinc-600 rounded-md shadow-md p-6 w-full max-w-sm">
                <Phrase />
              </div>
            </div>
          </div>
        </div>
      </main>

    </>

  );
}
