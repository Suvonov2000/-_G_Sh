import { Carousel } from "antd";
import Sliders from "./sliders";

const SliderSection = () => {
  return (
    <div className="w-[80%] h-[450px] m-auto mt-3 bg-[#F5F5F580]">
      <Carousel>
        <div>
          <Sliders />
        </div>
        <div>
          <Sliders />
        </div>
        <div>
          <Sliders />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderSection;
