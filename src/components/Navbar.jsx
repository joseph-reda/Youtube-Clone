import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faVideo,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import logo from "../asstes/logo.png";
import icon from "../asstes/me.jpeg";
import { Link } from "react-router-dom";

function Navbar({ setMenuBar }) {
  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="grid grid-cols-3 px-5 py-2 items-center">
        <div className="flex items-center gap-8">
          <FontAwesomeIcon
            icon={faBars}
            className="h-[30px] text-[#797979] cursor-pointer max-sm:hidden"
            onClick={() =>
              setMenuBar((prev) => (prev === false ? true : false))
            }
          />
          <Link className="flex items-center gap-1" to={"/"}>
            <FontAwesomeIcon className="text-[40px] text-[#FF0000]" icon={faYoutube} />
            <span className="text-[#212121] font-bold text-[24px]">Youtube</span>
          </Link>
        </div>
        <div>
          <form className="border-[2px] p-5 rounded-3xl bg-white h-[50px] w-[500px] flex justify-between items-center max-sm:hidden">
            <input
              type="text"
              placeholder="Search"
              className="p-1 text-[19px] outline-none w-[420px]"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </form>
        </div>
        <div className="flex items-center gap-8 justify-end mr-5 max-sm:gap-3 max-sm:mr-0">
          <FontAwesomeIcon
            icon={faVideo}
            className="text-[26px] text-[#797979] cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faBell}
            className="text-[26px] text-[#797979] cursor-pointer"
          />
          <img
            src={icon}
            alt="icon"
            className="w-[42px] rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
