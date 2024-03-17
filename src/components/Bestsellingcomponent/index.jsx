import { Button } from "antd";
import React from "react";

function BestsellingComponent({
  title = "Best Selling",
  path = "",
  data = [],
}) {
  return (
    <div className="flex-col w-full">
      <div className="flex w-full justify-between">
        <p className="font-Robo text-4xl font-medium">{title}</p>
        <Button className="bg-black text-white">View all</Button>
      </div>
      <div className="flex w-full gap-5 mt-8">
        <div className="flex h-60 w-2/12 bg-gray-600 cursor-pointer">1</div>
        <div className="flex h-60 w-2/12 bg-gray-600">1</div>
        <div className="flex h-60 w-2/12 bg-gray-600">1</div>
        <div className="flex h-60 w-2/12 bg-gray-600">1</div>
        <div className="flex h-60 w-2/12 bg-gray-600">1</div>
        <div className="flex h-60 w-2/12 bg-gray-600">1</div>
      </div>
    </div>
  );
}

export default BestsellingComponent;
