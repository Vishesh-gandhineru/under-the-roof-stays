import React from "react";

export const PriceMinToMax = () => {
  return (
    <div className="flex-column ">
      <h4 className="text-[18px] ">Price Range</h4>
      <div className="mt-[15px] flex gap-[8px] ">
        <input
          className="bg-[#f2f2f2] w-[50%] rounded-[5px] py-[10px] border-[1px] border-solid border-[#1f1f1f] text-center"
          placeholder="₹. Min"
          type="number"
        />
        <input
          className="bg-[#f2f2f2] w-[50%] rounded-[5px] py-[10px] border-[1px] border-solid border-[#1f1f1f] text-center"
          placeholder="₹. Max"
          type="number"
        />
      </div>
      <div className="flex justify-center items-center  mt-[10px]">
        <button className="w-[100%] text-[14px] py-[10px] rounded-[5px] border-[1px] border-solid border-[#1f1f1f] hover:bg-[#000] hover:text-[#fff]">
          Submit
        </button>
      </div>
    </div>
  );
};
