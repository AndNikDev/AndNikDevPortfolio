import React from "react";

function Phrase() {
  return (
    <div className="border border-zinc-700 p-6 rounded-md bg-zinc-800/60 backdrop-blur-md text-base text-gray-300 font-geistmono">
      <p className="italic leading-relaxed text-balance">
        <q>
          A <span className="font-semibold text-white">language</span> that
          doesn't affect the way you think about{" "}
          <span className="font-semibold text-white">programming</span> is not
          worth knowing.
        </q>
      </p>
      <p className="mt-4 text-right text-sm text-gray-500">――― Alan Perlis</p>
    </div>
  );
}

export default Phrase;
