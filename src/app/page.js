

import ProfileCard from "@/components/ProfileCard";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import NewSkills from "@/components/NewSkills";
import Phrase from "@/components/Phrase";

export default function Home() {
  return (
    <main className="min-h-screen text-white font-geist px-4 py-2 pt-20 overflow-x-hidden flex flex-col justify-center">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 items-stretch">

          {/* Columna 1: Perfil y Sobre mí */}
          <aside className="flex flex-col gap-4 md:col-span-3 h-full">
            <div className="shrink-0 flex flex-col"><ProfileCard /></div>
            <div className="flex-1 flex flex-col [&>*]:flex-1"><AboutMe /></div>
          </aside>

          {/* Columna 2: Experiencia y Proyectos */}
          <section className="flex flex-col gap-4 md:col-span-5 h-full">
            <div className="flex-1 flex flex-col [&>*]:flex-1"><Experience /></div>
            <div className="flex-1 flex flex-col [&>*]:flex-1"><Projects /></div>
          </section>

          {/* Columna 3: Habilidades y Frase */}
          <aside className="flex flex-col gap-4 md:col-span-2 h-full">
            <div className="shrink-0 flex flex-col"><Skills /></div>
            <div className="shrink-0 flex flex-col"><NewSkills /></div>
            <div className="flex-1 flex flex-col [&>*]:flex-1"><Phrase /></div>
          </aside>

        </div>
      </div>
    </main>
  );
}
