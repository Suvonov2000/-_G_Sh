const Sliders = () => {
  return (
    <div className="w-full h-[450px] flex">
      <div className="w-[60%] pl-[40px]   ">
        <h1 className="mt-[68px] mb-2 text-[14px]">Welcome to GreenShop</h1>
        <h1 className="text-[70px] font-black uppercase text leading-[70px] ">
          Let's Make a Better <span className="text-[#46A358]">Planet</span>
        </h1>
        <p className="mt-2 text-[14px] w-[60%]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button
          type="button"
          className="w-[100px] h-[35px]  mt-[48px] gap-2 flex items-center justify-center text-white rounded-[6px] bg-[#46A358] cursor-pointer"
        >
          SHOP NOW
        </button>
      </div>
      <div className="w-[40%] relative flex items-center justify-center ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="bigImage"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="smallImage"
          className="absolute bottom-0 left-[50px] w-[150px] h-[150px]"
        />
      </div>
    </div>
  );
};
export default Sliders;
