import React from "react";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGamepad,
  faCarSide,
  faFutbol,
  faMicrochip,
  faBuildingColumns,
  faTv,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";

function SideBar({ menuBar, category, setCategory }) {
  return (
    <div className="p-8 shadow-sm bg-white h-screen sticky top-[66px] left-0 max-sm:hidden">
      <ul className="flex flex-col gap-6 text-[18px] text-[#797979]">
        <li
          className={`flex gap-4 cursor-pointer items-center hover:text-[#ED3833] ${
            category === 0 ? "active" : ""
          }`}
          onClick={() => setCategory(0)}
        >
          <FontAwesomeIcon icon={faHouse} />
          <span className={menuBar ? "" : "hidden"}>Home</span>
        </li>
        <li
          className={`flex gap-4 cursor-pointer items-center hover:text-[#ED3833] ${
            category === 20 ? "active" : ""
          }`}
          onClick={() => setCategory(20)}
        >
          <FontAwesomeIcon icon={faGamepad} />
          <span className={menuBar ? "" : "hidden"}>Gaming</span>
        </li>
        <li
          className={`flex gap-4 cursor-pointer items-center hover:text-[#ED3833] ${
            category === 2 ? "active" : ""
          }`}
          onClick={() => setCategory(2)}
        >
          <FontAwesomeIcon icon={faCarSide} />
          <span className={menuBar ? "" : "hidden"}>Automobiles</span>
        </li>
        <li
          className={`flex gap-4 cursor-pointer items-center hover:text-[#ED3833] ${
            category === 17 ? "active" : ""
          }`}
          onClick={() => setCategory(17)}
        >
          <FontAwesomeIcon icon={faFutbol} />
          <span className={menuBar ? "" : "hidden"}>Sports</span>
        </li>
        <li
          className={`flex gap-4 cursor-pointer items-center hover:text-[#ED3833] ${
            category === 28 ? "active" : ""
          }`}
          onClick={() => setCategory(28)}
        >
          <FontAwesomeIcon icon={faMicrochip} />
          <span className={menuBar ? "" : "hidden"}>Technologey</span>
        </li>
        <li
          className={`flex gap-4 cursor-pointer items-center hover:text-[#ED3833] ${
            category === 24 ? "active" : ""
          }`}
          onClick={() => setCategory(24)}
        >
          <FontAwesomeIcon icon={faBuildingColumns} />
          <span className={menuBar ? "" : "hidden"}>Entertainment</span>
        </li>
        <li
          className={`flex gap-4 cursor-pointer items-center hover:text-[#ED3833] ${
            category === 10 ? "active" : ""
          }`}
          onClick={() => setCategory(10)}
        >
          <FontAwesomeIcon icon={faTv} />
          <span className={menuBar ? "" : "hidden"}>Music</span>
        </li>
        <li
          className={`flex gap-4 cursor-pointer items-center hover:text-[#ED3833] ${
            category === 22 ? "active" : ""
          }`}
          onClick={() => setCategory(22)}
        >
          <FontAwesomeIcon icon={faBlogger} />
          <span className={menuBar ? "" : "hidden"}>Blogs</span>
        </li>
        <li
          className={`flex gap-4 cursor-pointer items-center hover:text-[#ED3833] ${
            category === 25 ? "active" : ""
          }`}
          onClick={() => setCategory(25)}
        >
          <FontAwesomeIcon icon={faNewspaper} />
          <span className={menuBar ? "" : "hidden"}>News</span>
        </li>
      </ul>
      <hr className="my-5 border-[#ED3833.8px] w-[110%]" />
    </div>
  );
}

export default SideBar;
