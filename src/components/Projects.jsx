import React from "react";

function Projects() {
  return (
    <section>
      <header>
        <h1 className="text-2xl font-geist mb-4">
          {"<"}
          <span className="underline">Projects</span>
          {"/>"}
        </h1>
      </header>

      <article className="px-6 py-4 bg-zinc-800/60 backdrop-blur-md rounded-md shadow-md font-geistmono">
        {/* Aquí puedes mapear tus proyectos cuando los tengas listos */}
        <p className="text-sm text-gray-400 italic">Coming soon...</p>
      </article>
    </section>
  );
}

export default Projects;
