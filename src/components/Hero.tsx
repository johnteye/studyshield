import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.png";
import logo from "../assets/UG.png";
import book from "../assets/book.png";
import dnd from "../assets/dnd.png";
import productive from "../assets/product.png";

const Hero = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="title flex flex-row">
        <img className="h-16 mr-10" src={logo} />
        <h1 className="font-sans font-bold text-5xl text-custom-gray">
          StudyShield
        </h1>
      </div>
      <div className="body h-64 mt-20 flex">
        <div className="card bg-card-blue w-72 h-full  py-5 flex flex-col rounded-3xl items-center justify-evenly mr-10">
          <div className="icon w-16 p-2 h-16 rounded-full bg-white">
            <img src={book} />
          </div>
          <p className="text-center text-custom-gray text-xs font-sans">
            Maximizing the effectiveness of your <br /> studies involves a
            strategic approach <br /> that balances intense focus with <br />{" "}
            restorative breaks{" "}
          </p>
        </div>
        <div className="card bg-card-blue w-72 h-full  py-5 flex flex-col rounded-3xl items-center justify-evenly mr-10">
          <div className="icon w-16 p-2 h-16 rounded-full bg-white">
            <img className="h-12 ml-4" src={dnd} />
          </div>
          <p className="text-center text-custom-gray text-xs font-sans">
            For optimal study efficiency, consider
            <br /> using full and uninterrupted sessions in <br /> kiosk mode by
            locking your device into <br /> a single application{" "}
          </p>
        </div>
        <div className="card bg-card-blue w-72 h-full  py-5 flex flex-col rounded-3xl items-center justify-evenly">
          <div className="icon w-16 p-2 h-16 rounded-full bg-white">
            <img src={productive} />
          </div>
          <p className="text-center text-custom-gray text-xs font-sans">
            Watch your productivity and efficiency <br /> boost over time as you
            implement <br /> focused study techniques you’ll notice <br />{" "}
            significant improvements.{" "}
          </p>
        </div>
      </div>
      <div className="start mt-28"></div>

      <button
        onClick={handleGetStarted}
        className="bg-blue h-14 w-72 rounded-2xl font-sans font-semibold text-xl text-white"
      >
        {" "}
        Get Started
      </button>
    </div>
  );
};

export default Hero;
