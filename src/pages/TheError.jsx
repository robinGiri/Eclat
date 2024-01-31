import React from "react";
import error from "../assets/error.gif";
import { Link } from "react-router-dom";
import robin from '../assets/robinSlipper.gif';

function TheError() {
  return (
    <div>
      <div className="hidden lg:block md:block">
      <div className="h-[88vh] custom-scroll flex flex-col justify-center">
      <div className="flex mx-[10%] pl-[4%] -mt-[5rem]">
        <div className="w-[50%] h-[50vh] p-4 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-[#B88E72]">WRONG TURN?</h1>
          <p className="text-lg leading-8">
            You look lost, stranger. You know what helps when you’re lost? A
            piping hot bowl of noodles. Take a seat, we’re frantically at work
            here cooking up something good. Oh, you need something to read?
            These might help you:
          </p>
          <Link to="/">
            <p>
              <span className="stylish-border  cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72]">
                Home
              </span>
            </p>
          </Link>
          <p>@Eclat</p>
          <p>Eclat Support</p>
        </div>
        <div className="border-black w-[50%] flex justify-center ">
          <img src={error} alt="Error" className="w-[400px]" />
        </div>
      </div>
    </div>
      </div>

      <div className="lg:hidden">
      <div className="h-[90vh] flex items-center">
      <img src={robin} className="h-[70vh]"/>
      </div>
      </div>
    </div>
  );
}

export default TheError;
