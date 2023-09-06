import React from "react";
import "./Sidebar.css";
import { PiNotebook } from "react-icons/pi";
import { BsChatLeft } from "react-icons/bs";
import { LuEdit3 } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
function Sidebar() {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-1/5">
      <div className=" w-full h-screen flex flex-col justify-between bg-gray-950 p-3 bg-opacity-90 absolute left-0 bottom-0">
        <div id="t-sb">
          <div className="flex gap-2 mb-5 items-center">
            <img
              className=" w-[38px]"
              src="https://i.ibb.co/8xGw0Pt/chatgpt-removebg-preview.png"
              alt=""
            />
            <span className="text-white text-lg">ChatGPT</span>
          </div>
          <div className="px-2 py-2 text-white border border-gray-400 rounded flex items-center">
            &nbsp;<span className="text-xl">+</span> &nbsp;&nbsp;&nbsp;New chat{" "}
            <span className="ml-auto text-xl">
              <PiNotebook />
            </span>
          </div>
          <div className="text-white mt-3">
            <p className="text-sm text-gray-400">Today</p>
            <p className="flex items-center justify-around mt-3">
              <span>
                <BsChatLeft className="cursor-pointer" />
              </span>{" "}
              Who is Albert Einstein{" "}
              <span>
                <LuEdit3 className=" cursor-pointer" />
              </span>
              <span>
                <RiDeleteBinLine className=" cursor-pointer" />
              </span>
            </p>
            <p className="flex items-center justify-around mt-3">
              <span>
                <BsChatLeft className=" cursor-pointer" />
              </span>{" "}
              Area of circle formula{" "}
              <span>
                <LuEdit3 className=" cursor-pointer" />
              </span>
              <span>
                <RiDeleteBinLine className=" cursor-pointer" />
              </span>
            </p>
          </div>
        </div>
        <div
          id="bt-sb"
          className="grid text-white border-t-2 border-t-slate-400 pt-12"
        >
          <VscAccount className="text-white text-xl" />
          <p className="text-white whitespace-nowrap">Upgrade to Plus</p>
          <p className=" bg-orange-200 text-amber-700 px-2 rounded">New</p>

          <img
            className="w-[25px]"
            src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg"
            alt=""
          />
          <p>Pavithr-Kumar</p>
          <p>...</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
