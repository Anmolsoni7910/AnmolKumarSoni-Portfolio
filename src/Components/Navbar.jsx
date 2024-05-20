import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { duration } from "@mui/material";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  const menuVarients = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const linkVarients = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  const containerVar = {
    initial: {
      transition: {
        staggerChildren: 0.9,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed z-30"
      >
        <div>
          <h1 className="text-5xl font-logo ml-2">Anmol</h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 hover:text-white duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav((prevState) => !prevState)}
          className="cursor-pointer pr-4 text-gray-500 md:hidden z-40"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <AnimatePresence>
          {nav && (
            <motion.ul
              variants={menuVarients}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col justify-center items-center absolute top-0 right-0 w-1/2 h-screen backdrop-blur-xl origin-top"
            >
              <motion.div 
                variants={containerVar}
                initial="initial"
                animate="open"
                >
                {links.map(({ link, id }) => (
                  <motion.li
                    key={id}
                    variants={linkVarients}
                    initial="initial"
                    animate="open"
                    className="px-4 cursor-pointer capitalize py-4 text-3xl hover:scale-110 duration-200"
                  >
                    <Link
                      to={link}
                      smooth
                      duration={500}
                      onClick={() => setNav((prevState) => !prevState)}
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </motion.div>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
