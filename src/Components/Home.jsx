import React from "react";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-scroll";

const Home = () => {
  const imageUrl =
    "https://th.bing.com/th/id/OIP.4cmK9d36bF0F7-V-SaVPnAHaG_?rs=1&pid=ImgDetMain";

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="text-white max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full md:flex-row">
        <div className="flex flex-col justify-center space-y-4 h-full mt-10">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 ">
            Hi, I'm Anmol Kumar Soni. A passionate Full Stack React Developer based in Lucknow Uttar Pradesh, India.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white text-lg w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer hover:scale-110 duration-200">
                Portfolio
                <span className="group-hover:translate-x-3 duration-200 scale-110">
                    <GoChevronRight size={20}/>
                </span>
            </Link>
          </div>
        </div>
        <div>
            <img src={"/images/myProfileImage.jpg"} alt="profile image" className="rounded-2xl mx-auto h-72 w-72 md:h-96 md:w-96 object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
