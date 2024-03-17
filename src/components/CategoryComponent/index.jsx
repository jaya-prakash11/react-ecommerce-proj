import React from "react";

export default function CategoryComponent() {
  return (
    <div className="flex h-96 bg-slate-500">
      <div className="flex h-full w-3/12 bg-black"> </div>
      <div className=" flex flex-wrap w-full h-full bg-green-400">
        <div className="flex w-2/6 h-1/2 bg-red-500 border-b-2 border-r-2 border-cyan-100 ">
          {" "}
        </div>
        <div className="flex w-2/6 h-1/2 bg-red-500  border-b-2 border-r-2">
          {" "}
        </div>
        <div className="flex w-2/6 h-1/2 bg-red-500  border-b-2 border-r-2">
          {" "}
        </div>
        <div className="flex w-2/6 h-1/2 bg-red-500  border-b-2 border-r-2">
          {" "}
        </div>
        <div className="flex w-2/6 h-1/2 bg-red-500  border-b-2 border-r-2">
          {" "}
        </div>
        <div className="flex w-2/6 h-1/2 bg-red-500  border-b-2 border-r-2">
          {" "}
        </div>
      </div>
    </div>
  );
}
