"use client"
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {motion} from 'framer-motion'
import Link from "next/link";

const Banner = () => {
    return (
      <div className="bg-slate-100">
        <Container>
          <Box
            className="lg:flex-row md:flex-row flex-col lg:h-[100vh] md:h-[100vh] h-auto"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              height: "100vh",
              alignItems: "center",
            }}
          >
            <div className="flex-1 space-y-5">
              <Typography variant="h2" fontWeight="bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8758c4] to-[#661cbb]">
                  Hello, I&apos;m
                </span>
                <br />
                <TypeAnimation
                  sequence={[
                    "Fahim",
                    2000,
                    `MERN Stack Developer`,
                    2000,
                    "Frontend Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </Typography>
              <Typography variant="h6">
                Web developer skilled in front-end and back-end technologies.
                Proficient in creating responsive, user-centric designs and
                implementing robust functionalities. Experienced in various
                frameworks, ensuring efficient, secure, and dynamic web
                solutions.
              </Typography>
              <div className="flex gap-5">
                <a
                  href="https://filebin.net/17ual24x69k5l6ls/New_Microsoft_Word_Document.pdf"
                  className="bg-[#5e3bee] text-white px-3 py-2 rounded-lg download-btn"
                >
                  Download CV
                </a>
                <button className="outline outline-1 px-3 py-2 outline-[#5e3bee] rounded-lg text-[#5e3bee]">
                  Hire Me
                </button>
              </div>
            </div>
            <div className="lg:w-[45%] ">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="place-self-stretch"
              >
                <Image
                  className="lg:w-600 md:w-500 w-[600px]"
                  src="https://my-awesome-react-project.netlify.app/img/hero_img.png"
                  width={600}
                  height={600}
                  alt="banner-img"
                />
              </motion.div>
            </div>
          </Box>
        </Container>
      </div>
    );
};

export default Banner;

	// https://my-awesome-react-project.netlify.app/img/hero_img.png