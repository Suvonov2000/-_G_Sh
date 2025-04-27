const Sliders = ({
  title,
  subTitle,
  description,
  bigImage,
  smallImage,
  buttonText,
}) => {
  return (
    <div className="w-full h-[450px] flex">
      <div className="w-[60%] pl-[40px]   ">
        <h1 className="mt-[68px] mb-2 text-[14px]">Welcome to GreenShop</h1>
        <h1 className="text-[70px] font-black uppercase text leading-[70px] ">
          {title} <span className="text-[#46A358]">Planet</span>
        </h1>
        <p className="mt-2 text-[14px] w-[60%]">{description}</p>
        <button
          type="button"
          className="w-[100px] h-[35px]  mt-[48px] gap-2 flex items-center justify-center text-white rounded-[6px] bg-[#46A358] cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
      <div className="w-[40%] relative flex items-center justify-center ">
        <img src={bigImage} alt="bigImage" />
        <img
          src={smallImage}
          alt="smallImage"
          className="absolute bottom-0 left-[50px] w-[150px] h-[150px]"
        />
      </div>
    </div>
  );
};
export default Sliders;
