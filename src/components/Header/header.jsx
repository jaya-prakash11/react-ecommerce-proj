import React from "react";
import {
  AiFillShopping,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import Searchbar from "../Searchbar/searchbar";
import Notify from "../shared/notifyingelements/notify";

export default function Header() {
  return (
    <div className="flex min-w-full  xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] xs:w-[412px 2xl:px-36 xl:px-11 lg:px-11 md:px-8 sm:px-8 min-h-28  bg-white fixed items-center justify-between box-border z-20">
      <AiFillShopping size={40}  />
      <Searchbar />
      <div className="flex gap-5 ">
        <AiOutlineUser className=" hover:text-[26px]  2xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-gray-500 cursor-pointer" />
        <Notify>
          <AiOutlineHeart className=" hover:text-[26px] 2xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-gray-500 cursor-pointer" />
        </Notify>
        <Notify>
          <AiOutlineShoppingCart className="hover:text-[26px] 2xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-gray-500 cursor-pointer" />
        </Notify>
      </div>
    </div>
  );
}
