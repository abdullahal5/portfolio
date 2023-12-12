"use client"
import { Container } from "@mui/material";
import { Line } from "rc-progress";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <Container className="lg:h-[100vh]">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7b2cca] to-[#661cbb] text-center my-10">
        Skills
      </h1>
      <div className="lg:w-2/4 mx-auto  flex gap-4 items-center">
        <div>
          <FaHtml5 color="#7b2cca" fontSize={"2rem"} />
        </div>
        <div className="w-full">
          <div className="flex justify-between ">
            <h1>HTML</h1>
            <p>95%</p>
          </div>
          <Line
            percent={95}
            strokeWidth={1}
            strokeColor="#661cbb"
            trailWidth={"#661cbb"}
          />
        </div>
      </div>
      <div className="lg:w-2/4 mx-auto mt-6 flex gap-4 items-center">
        <div>
          <FaCss3 color="#7b2cca" fontSize={"2rem"} />
        </div>
        <div className="w-full">
          <div className="flex justify-between ">
            <h1>CSS</h1>
            <p>85%</p>
          </div>
          <Line
            percent={85}
            strokeWidth={1}
            strokeColor="#661cbb"
            trailWidth={"#661cbb"}
          />
        </div>
      </div>
      <div className="lg:w-2/4 mx-auto mt-6 flex gap-4 items-center">
        <div>
          <SiJavascript color="#7b2cca" fontSize={"2rem"} />
        </div>
        <div className="w-full">
          <div className="flex justify-between ">
            <h1>JavaScript</h1>
            <p>70%</p>
          </div>
          <Line
            percent={70}
            strokeWidth={1}
            strokeColor="#661cbb"
            trailWidth={"#661cbb"}
          />
        </div>
      </div>
      <div className="lg:w-2/4 mx-auto mt-6 flex gap-4 items-center">
        <div>
          <FaReact color="#7b2cca" fontSize={"2rem"} />
        </div>
        <div className="w-full">
          <div className="flex justify-between ">
            <h1>React</h1>
            <p>75%</p>
          </div>
          <Line
            percent={75}
            strokeWidth={1}
            strokeColor="#661cbb"
            trailWidth={"#661cbb"}
          />
        </div>
      </div>
      <div className="lg:w-2/4 mx-auto mt-6 flex gap-4 items-center">
        <div>
          <SiMongodb color="#7b2cca" fontSize={"2rem"} />
        </div>
        <div className="w-full">
          <div className="flex justify-between ">
            <h1>MonogoDB</h1>
            <p>60%</p>
          </div>
          <Line
            percent={60}
            strokeWidth={1}
            strokeColor="#661cbb"
            trailWidth={"#661cbb"}
          />
        </div>
      </div>
      <div className="lg:w-2/4 mx-auto mt-6 flex gap-4 items-center">
        <div>
          <FaNodeJs color="#7b2cca" fontSize={"2rem"} />
        </div>
        <div className="w-full">
          <div className="flex justify-between ">
            <h1>NodeJs</h1>
            <p>65%</p>
          </div>
          <Line
            percent={65}
            strokeWidth={1}
            strokeColor="#661cbb"
            trailWidth={"#661cbb"}
          />
        </div>
      </div>
      <div className="lg:w-2/4 mx-auto mt-6 flex gap-4 items-center">
        <div>
          <SiExpress color="#7b2cca" fontSize={"2rem"} />
        </div>
        <div className="w-full">
          <div className="flex justify-between ">
            <h1>Express</h1>
            <p>77%</p>
          </div>
          <Line
            percent={77}
            strokeWidth={1}
            strokeColor="#661cbb"
            trailWidth={"#661cbb"}
          />
        </div>
      </div>
      <div className="lg:w-2/4 mx-auto mt-6 flex gap-4 items-center">
        <h1 className="text-lg text-[#737373]">Development Skills More than 7 months</h1>
      </div>
    </Container>
  );
};

export default Skills;
