import React from "react";

export const PriceRange = () => {
  return (
    <div className="mt-[25px] pt-[15px] border-t-2 border-solid border-t-[#bababa]">
      <h4 className="text-[20px]">Price Range</h4>
      <div className="flex-column">
        <div className="mt-[10px]">
          <input type="radio" />
          <label className="pl-[10px]">Under ₹.10,000</label>
        </div>
        <div className="mt-[10px]">
          <input type="radio" />
          <label className="pl-[10px]">₹.10,000 - ₹.20,000</label>
        </div>
        <div className="mt-[10px]">
          <input type="radio" />
          <label className="pl-[10px]">₹.30,000 - ₹.40,000</label>
        </div>
        <div className="mt-[10px]">
          <input type="radio" />
          <label className="pl-[10px]">₹.40,000 - ₹.50,000</label>
        </div>
        <div className="mt-[10px]">
          <input type="radio" />
          <label className="pl-[10px]">More than ₹.50,000</label>
        </div>
      </div>
    </div>
  );
};
