"use client";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function ProfileCard() {
  return (
    <div className="relative rounded-lg shadow-md flex flex-col items-center text-center pt-16">
      <div className="absolute -top-[6.5rem] w-40 h-40  bg-gray-700 shadow-lg flex items-center justify-center rounded-md overflow-hidden">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={160}
          height={160}
          className="rounded-md object-cover"
          priority
        />
      </div>
      <div className="w-full max-w-md px-6 py-4 bg-zinc-800/60 backdrop-blur-md rounded-md shadow-md font-geistmono">
        <h2 className="text-xl font-geist font-semibold text-center">
          Andrew Nikolayk Muñoz Álvarez
        </h2>
        <p className="text-gray-400 text-center">@AndNikDev</p>
        <p className="mt-3 text-sm text-gray-300 text-balance text-center leading-relaxed">
          Frontend Developer&nbsp;|&nbsp;Web3 Learner&nbsp;|&nbsp;Tech Explorer
        </p>

        {/* Redes sociales */}
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://github.com/andnikdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
          <a
            href="https://twitter.com/andnikdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/andnikdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

