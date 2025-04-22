import SliderSection from "../carousel";
import Category from "./category";
import SideNav from "./sidenav";

const Home = () => {
  return (
    <div>
      <SliderSection />
      <div className="flex w-[80%] mt-[46px] gap-8 m-auto">
        <SideNav />
        <Category />
      </div>
    </div>
  );
};
export default Home;
