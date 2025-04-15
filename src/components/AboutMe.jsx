import React from "react";

function AboutMe() {
  return (
    <section>
      <header>
        <h1 className="text-2xl font-geist mb-4">
          {"<"}
          <span className="underline">AboutMe</span>
          {"/>"}
        </h1>
      </header>

      <div className="text-sm font-geistmono px-2 py-1 bg-zinc-800/60 backdrop-blur-md rounded-md shadow-md">
        <p className="leading-relaxed">
          <span className="underline decoration-wavy decoration-pink-500/50">
            Frontend developer
          </span>{" "}
          with 1+ year of experience crafting responsive and user-focused web
          applications. Currently expanding my skill set into blockchain and{" "}
          <span className="underline decoration-wavy decoration-sky-500/50">
            Web3 development
          </span>
          , driven by a strong interest in{" "}
          <span className="underline decoration-wavy decoration-emerald-500/50">
            decentralized technologies
          </span>{" "}
          and their potential to shape the future of the web.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
