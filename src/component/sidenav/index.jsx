import { useState } from "react";
import Categories from "./categories";
import PriceRange from "./price-range";
import Size from "./size";
import Discount from "./discount";

const SideNav = () => {
  return (
    <div className="w-[310px] mt-[46px] px-[18px] py-[14px] bg-[#F5F5F580]">
      <Categories />
      <PriceRange />
      <Size />
      <Discount />
    </div>
  );
};
export default SideNav;
