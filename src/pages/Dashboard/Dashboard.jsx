import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchAllCategory } from "../../Slices/productslice";
import CarouselComponent from "../../components/Carousel";
import BestsellingComponent from "../../components/Bestsellingcomponent";
import CategoryComponent from "../../components/CategoryComponent";
import ProductCarousel from "../../components/Productcarousel";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();
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
  return (
    <div className="flex-col h-fit  w-full  bg-green-500">
      <div className="flex w-full h-fit bg-red-500 ">
        <div className=" flex w-full gap-5 bg-slate-200 justify-center">
          {categoryList.map((res) => (
            <p onClick={() => navigate("/product")} className="cursor-pointer">
              {res.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex-col space-y-16">
        <CarouselComponent data={categoryList} />
        <BestsellingComponent title={"Flash Sales"} />
        <BestsellingComponent />
        <CategoryComponent />
        <CategoryComponent />
        <ProductCarousel title={"Electronics"} />
        <ProductCarousel title={"Bags"} />
      </div>
    </div>
  );
}
