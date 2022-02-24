/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-unresolved-links */
/* eslint-disable @react/no-unescaped-entities */

import Link from "next/link";
import * as React from "react";

export default function Home() {
  const data = [
    {
      name: "Fashion",
    },
    {
      name: "Shooting",
    },
    {
      name: "Creativity",
    },
    {
      name: "Darkside",
    },
    {
      name: "Art",
    },
    {
      name: "Wallpapers",
    },
    {
      name: "HD",
    },
  ];

  return (
    <div className="flex flex-col bg-black container text-white min-h-screen">
      <style jsx>{`
        .container {
          background-repeat: no-repeat;
          background-size: 100%;
          opacity: 10;
          background-image: url("https://images.unsplash.com/photo-1625417026759-69162d7ded55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80");
          background-color: black;
          position: fixed;
          top: 0;
          overflow: scroll;
        }
      `}</style>
      <div className="bg-black/30">
        <div className="flex justify-center items-center">
          <div>
            <img
              src="https://source.unsplash.com/120x120/?portrait"
              className="rounded-full h-[3.4rem] mt-3"
              alt="Avatar"
            />
          </div>
          <h1 className="font-bold text-4xl mt-3 p-4 text-center">
            {" "}
            @sour_moha{" "}
          </h1>
        </div>
        {/* <div className="">
        <img
        className="h-full opacity-60 "
        src="https://images.unsplash.com/photo-1625417026759-69162d7ded55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
        />{" "}
      </div> */}

        <div className="rounded-t-[3rem] backdrop-blur-xl   bg-slate-700/30 h-[40rem] relative  top-[15rem] ">
          <div className="p-5 flex flex-col mt-4">
            <div>
              <h1 className="text-2xl font-bold ">About</h1>
              <p className="text-gray-300">
                Photography It s my hoby and my love and before I knew it I ve
                realized that photography is my true passion . I find myself in.
                creative portraits, darkside and dimensions, everything now
                draws me to a deep feeling of connection to art.
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Interests</h1>
              <div className="flex flex-wrap">
                {data.map((n,index) => {
                  return (
                    <button key={index} className="bg-slate-600 mx-2 my-1 py-2 px-4 text-lg rounded-lg">
                      {n.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//Shooting Creativity Darkside HD Art Wallpapers
