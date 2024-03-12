import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
export default function Notify({ count = "2", children }) {
  return (
    <div className="flex relative cursor-pointer">
      <div class="w-4 h-4 rounded-full flex  border-1 justify-center bg-black items-center absolute right-[-8px] top-[-5px]">
        <p className="2xl:text-[11px]  text-[10px] font-medium text-slate-300">
          2
        </p>
      </div>
      {children || <AiOutlineHeart size={30} style={{ color: "grey" }} />}
    </div>
  );
}
