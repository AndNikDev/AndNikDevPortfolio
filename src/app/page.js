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
    <main className="min-h-screen text-white font-geist px-4 py-6 pt-[4rem]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">

          {/* Columna 1: Perfil y Sobre mí */}
          <aside className="flex flex-col space-y-4 md:col-span-3 items-center md:items-start mt-20">
            <section className="border border-zinc-600 rounded-md shadow-md p-6 w-full max-w-md">
              <ProfileCard />
            </section>
            <section className="border border-zinc-600 rounded-md shadow-md p-6 w-full max-w-md">
              <AboutMe />
            </section>
          </aside>

          {/* Columna 2: Experiencia y Proyectos */}
          <section className="flex flex-col space-y-4 md:col-span-5 items-center md:items-start">
            <article className="border border-zinc-600 p-8 rounded-md shadow-md w-full max-w-3xl">
              <Experience />
            </article>
            <article className="border border-zinc-600 p-8 rounded-md shadow-md w-full max-w-3xl">
              <Projects />
            </article>
          </section>

          {/* Columna 3: Habilidades y Frase */}
          <aside className="flex flex-col space-y-4 md:col-span-2 items-center md:items-start">
            <section className="border border-zinc-600 rounded-md shadow-md p-6 w-full max-w-sm">
              <Skills />
            </section>
            <section className="border border-zinc-600 rounded-md shadow-md p-6 w-full max-w-sm">
              <NewSkills />
            </section>
            <section className="border border-zinc-600 rounded-md shadow-md p-6 w-full max-w-sm">
              <Phrase />
            </section>
          </aside>

        </div>
      </div>
    </main>
  );
}
