/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/header";

function Layout() {
  return (
    <div className="flex-col min-w-full xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] xs:w-[412px] h-fit">
      <Header />
      <div className="flex flex-col  w-full  pt-28  2xl:px-36 xl:px-11 lg:px-11 md:px-8 sm:px-8">
        {<Outlet />}
      </div>
      <div className="flex h-64  w-full  pt-28  2xl:px-36 xl:px-11 lg:px-11 md:px-8 sm:px-8 bg-yellow-200">
        footer
      </div>
    </div>
  );
}

export default Layout;
