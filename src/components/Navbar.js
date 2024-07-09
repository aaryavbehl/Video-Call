import React from "react";
import logo from "../assets/meetinglight.gif";
const Navbar = () => {
    return (
        <div className="bg-black/90">
            <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
                {/* Left */}
                <div className="flex items-center">
                    <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
                        <img src={logo} alt="" className="object-cover " />
                    </div>
                    <div className="text-white font-bold">
                        <p className="text-[21px] pl-2">Aaryav Behl's Video Calling App</p>
                    </div>
                </div>
                {/* Right */}
                <div className="">
                    <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
                        <li>W.I.P</li>
                        <li>W.I.P</li>
                        <li>W.I.P</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;