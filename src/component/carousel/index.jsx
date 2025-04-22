import { Carousel } from "antd";
import { carousel_mock } from "../../utils/mock";
import Sliders from "./slide";

const SliderSection = () => {
  return (
    <div className="w-[80%] h-[450px] m-auto mt-3 bg-[#F5F5F580]">
      <Carousel>
        {carousel_mock.map((item) => (
          <Sliders key={item} item={item} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

export default SliderSection;
