import Categories from "./categories";
import PriceRange from "./price-range";
import Size from "./size";
import Discount from "./discount";

const SideNav = () => {
  return (
    <div className="w-[310px]  px-[18px] py-[14px] bg-[#F5F5F580] max-md:hidden">
      <Categories />
      <PriceRange />
      <Size />
      <Discount />
    </div>
  );
};
export default SideNav;
