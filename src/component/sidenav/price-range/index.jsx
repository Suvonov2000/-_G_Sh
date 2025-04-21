import { Slider } from "antd";
import { useState } from "react";

const PriceRange = () => {
  const [range, setRange] = useState([0, 1500]);
  return (
    <div className="mt-[40px]">
      <h3 className="font-bold">Price Range</h3>
      <div className="pl-[12px] w-full">
        <Slider min={0} max={1500} value={range} onChange={setRange} range />
        <div className=" font-bold">
          Price:{" "}
          <span className="text-[#36A358] font-bold">
            ${range[0]}- ${range[1]}
          </span>
        </div>
        <button
          type="button"
          className="w-[100px] h-[35px]  mt-[20px] gap-2 flex items-center justify-center text-white rounded-[6px] bg-[#46A358] cursor-pointer"
        >
          Filter
        </button>
      </div>
    </div>
  );
};
export default PriceRange;
