import React, { useEffect, useRef } from "react";
import PortfolioCard from "./PortfolioCard";
import { projects } from "../assets/data.js";
import Lenis from "@studio-freight/lenis/types";
import Card from "./Card.jsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { IoIosLink } from "react-icons/io";

const PortfolioNew = () => {
  const container = useRef(null);
  const mobile = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const {scrollYProgress: scrollYmobile} = useScroll({
    target: mobile,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYmobile, [0, 1], [20, 0]);
  const scale = useTransform(scrollYmobile, [0, 1], [1.05, 1]);
  const translate = useTransform(scrollYmobile, [0, 1], [0, -100]);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-8 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">I created this single project and I put my everything in it.</p>
        </div>
        <div ref={mobile} className="h-[120vh] transform scale-[0.8] p-10 flex items-center justify-center relative ">
          <div
            className="py-40 w-full relative"
            style={{
              perspective: "1000px",
            }}
          >
            <Card rotate={rotate} translate={translate} scale={scale} />
          </div>
        </div>
      </div>

      <div ref={container} className="w-full h-full">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          console.log(`targetScale ${i}: `,targetScale);
          return (
            <PortfolioCard
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      <div className="w-full mt-64 mx-auto">
        <div className="flex flex-col sm:flex-row justify-evenly gap-16 w-[90%] mx-auto">
          <button className="p-6 bg-gradient-to-r from-purple-700 via-blue-500 to-purple-400 rounded-lg text-black font-bold hover:scale-110 duration-300"><a href="https://lonely-teddy-newt.cyclic.app" target="_blank"
              rel="noreferrer" className="flex justify-center items-center gap-2"><IoIosLink className="w-8 h-8"/> Kavita Boutique Backend Live Link</a></button>

          <button className="p-6 bg-gradient-to-r from-purple-700 via-blue-500 to-purple-400 rounded-lg text-black font-bold hover:scale-110 duration-300"><a href="https://github.com/Anmolsoni7910/Kavita-Boutique-Backend" target="_blank"
              rel="noreferrer" className="flex justify-center items-center gap-2"><FaGithub className="w-8 h-8"/> Kavita Boutique Backend Github Code</a></button>
          
          <button className="p-6 bg-gradient-to-r from-purple-700 via-blue-500 to-purple-400 rounded-lg text-black font-bold hover:scale-110 duration-300"><a href="public/Kavita boutique backend.postman_collection.json" download={true} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2"><SiPostman className="w-8 h-8"/> Postman Collection Download</a></button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioNew;