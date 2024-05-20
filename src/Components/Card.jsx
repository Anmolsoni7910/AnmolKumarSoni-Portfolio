import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Card = ({ rotate, translate, scale }) => {
  console.log("rotate:", rotate.current);
  console.log("translate:", translate.current);
  console.log("scale:", scale.current);
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale: scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl  overflow-hidden p-4 relative">
        <div className="h-full w-full">
          <img
            src="/images/homePage.png"
            alt=""
            className="h-full w-full object-contain  rounded-lg"
          />
        </div>
        <div className="p-0 absolute bottom-0 z-10 flex flex-row justify-between w-[90%] sm:w-[96.5%]">
          <button className="flex items-center gap-2 rounded-lg bg-[#0c0c0cbe] px-4 py-2.5 text-xl sm:text-3xl font-bold text-white hover:bg-[#FF7308]">
            <a href="https://kavita-boutique-react-frontend.vercel.app/" className="flex justify-between items-center gap-2" target="_black">
              <span>Demo</span>
              <FaEye />
            </a>
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-[#0c0c0cbe] px-4 py-2.5 text-xl sm:text-3xl font-bold text-white hover:bg-[#2714d4]">
            <a href="https://github.com/Anmolsoni7910/Kavita-Boutique-React-Frontend" className="flex justify-between items-center gap-2" target="_black">
              <span>Code</span>
              <FaGithub />
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
