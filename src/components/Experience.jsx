import React from "react";

function Experience() {
  return (
    <section>
      <header>
        <h1 className="text-2xl font-geist mb-4">
          {"<"}
          <span className="underline">Experience</span>
          {"/>"}
        </h1>
      </header>

      <article className="px-6 py-4 bg-zinc-800/60 backdrop-blur-md rounded-md shadow-md font-geistmono">
        <ul className="list-disc list-outside text-sm text-balance leading-relaxed text-gray-200 space-y-2 ml-4">
          <li>
            Frontend Developer at ExampleCorp — Built and maintained UI
            components using React and TailwindCSS in a production environment.
          </li>
          <li>
            Web3 Intern at CryptoStart — Collaborated on decentralized app
            development and explored smart contract logic with Solidity.
          </li>
          <li>
            Open Source Contributor — Provided improvements in documentation and
            resolved frontend issues in community-driven projects.
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;
