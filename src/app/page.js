import ProfileCard from "@/components/ProfileCard";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import NewSkills from "@/components/NewSkills";
import Phrase from "@/components/Phrase";

export default function Home() {
  return (
    <main className="flex-1 w-full text-white font-geist px-3 sm:px-4 py-1 sm:py-2 flex flex-col justify-center overflow-x-hidden">
      <div className="w-full max-w-[1360px] mx-auto flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-2.5 sm:gap-3 xl:gap-3.5 items-stretch w-full">

          {/* Columna 1: Perfil y Sobre mí */}
          <aside className="flex flex-col gap-2.5 sm:gap-3 lg:col-span-3 h-full">
            <div className="shrink-0 flex flex-col"><ProfileCard /></div>
            <div className="flex-1 flex flex-col [&>*]:flex-1"><AboutMe /></div>
          </aside>

          {/* Columna 2: Experiencia y Proyectos */}
          <section className="flex flex-col gap-2.5 sm:gap-3 lg:col-span-5 h-full">
            <div className="flex-1 flex flex-col [&>*]:flex-1"><Experience /></div>
            <div className="flex-1 flex flex-col [&>*]:flex-1"><Projects /></div>
          </section>

          {/* Columna 3: Habilidades y Frase */}
          <aside className="flex flex-col gap-2.5 sm:gap-3 lg:col-span-2 h-full">
            <div className="shrink-0 flex flex-col"><Skills /></div>
            <div className="shrink-0 flex flex-col"><NewSkills /></div>
            <div className="flex-1 flex flex-col [&>*]:flex-1"><Phrase /></div>
          </aside>

        </div>
      </div>
    </main>
  );
}
