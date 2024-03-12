import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchAllCategory } from "../../slices/productslice";

export default function Dashboard() {
  let dispatch = useDispatch(fetchAllProducts());
  const products = useSelector(
    (state) => state?.products?.productAndCategory?.allProducts
  );
  const categoryList = useSelector(
    (state) => state?.products?.productAndCategory?.categoryList
  );
  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategory());
  }, []);
  console.log("asdds", categoryList);
  return (
    <div className="flex h-[3500px] w-full">
      <div className="flex w-full  bg-slate-200 h-fit justify-center ">
        <div className="flex l gap-5 ">
          {categoryList.map((res) => (
            <p>{res.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
