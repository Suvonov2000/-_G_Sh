const Size = () => {
  return (
    <div className="mt-[40px]">
      <h3 className="font-bold">Size</h3>
      <div className="pl-[12px] w-full">
        <div className="flex items-center justify-between mt-[7px] hover:text-[#46A358] cursor-pointer">
          <h3>Small</h3>
          <h3>(12)</h3>
        </div>

        <div className="flex items-center justify-between mt-[7px] hover:text-[#46A358] cursor-pointer">
          <h3>Medium</h3>
          <h3>(12)</h3>
        </div>

        <div className="flex items-center justify-between mt-[7px] hover:text-[#46A358] cursor-pointer">
          <h3>Large</h3>
          <h3>(12)</h3>
        </div>
      </div>
    </div>
  );
};
export default Size;
