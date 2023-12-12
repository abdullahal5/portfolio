import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import MyProject from "@/components/MyProject";
import Qualifications from "@/components/Qualifications";
import Skills from "@/components/Skills";
import { Container } from "@mui/material";

const HomePage = () => {
    return (
      <div className="lg:pt-1 md:pt-3 pt-14 ">
        <div>
          <div id="home">
            <Banner />
          </div>
          <div id="about">
            <Aboutme />
          </div>
          <div id="project">
            <MyProject />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="qualification">
            <Qualifications />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    );
};

export default HomePage;