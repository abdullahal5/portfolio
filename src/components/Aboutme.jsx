import { Box } from "@mui/material";
import Image from "next/image";

const Aboutme = () => {
    return (
      <div className="p-10 flex lg:flex-row md:flex-row flex-col-reverse lg:h-[100vh] items-center justify-between w-[100%]">
        <div>
          <Image
            src="https://my-awesome-react-project.netlify.app/img/about-me.png"
            height={500}
            width={500}
            alt="about image"
          />
        </div>
        <div className="lg:w-[40%]">
          <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#79559c] to-[#661cbb] border-l-2 border-[#661cbb] pl-3">
            About Me
          </h1>
          <p className="font-semibold text-lg mt-7">
            Hello, there! Im Fahim. A website developer with foundation
            built with mongoDB, Express.js, React and Node.js. I build
            interactive and responsive web application. I always try to upgrade
            my skill and knowledge. I am a team player and I am excited to work
            with others to create amazing applications. I am looking for a
            opportunity for presenting my skills and experience.
          </p>
        </div>
      </div>
    );
};

export default Aboutme;