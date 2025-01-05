import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/cryptography.png"
          title="Cryptography Project"
          description="🔨Crypto Miner is a Python project designed to encrypt and decrypt files, especially images, using the powerful cryptography library."
        />
        <ProjectCard
          src="/binaryMagic.png"
          title="Binary Magic"
          description="🔢A cross-language project that performs binary instructions, using Python, JavaScript, TypeScript, C#, C++, and C."
        />
        <ProjectCard
          src="/enc.png"
          title="Encryption Project"
          description="⛏️RC4 and Base64 Encoding/Decoding using c."
        />
      </div>
    </div>
  );
};

export default Projects;
