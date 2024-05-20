import React from "react";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import tailwindcss from "../assets/tailwindcss.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import reactPng from "../assets/react.png";
import redux from '../assets/redux.png';

const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "",
  },
  {
    id: 3,
    src: js,
    title: "JAVASCRIPT",
    style: "",
  },
  {
    id: 4,
    src: bootstrap,
    title: "BOOTSTRAP",
    style: "",
  },
  {
    id: 5,
    src: tailwindcss,
    title: "TAILWIND",
    style: "",
  },
  {
    id: 6,
    src: nodejs,
    title: "NODE JS",
    style: "",
  },
  {
    id: 7,
    src: expressjs,
    title: "EXPRESS JS",
    style: "",
  },
  {
    id: 8,
    src: mongodb,
    title: "MONGODB",
    style: "",
  },
  {
    id: 9,
    src: reactPng,
    title: "REACT",
    style: "",
  },
  {
    id: 10,
    src: redux,
    title: "REDUX",
    style: ""
  }
];

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 via-black to-black w-full text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mt-60">
          <p className="text-4xl bfont-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've studied and worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md place-content-center hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 sm:w-30 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
