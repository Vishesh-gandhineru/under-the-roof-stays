import React from "react";
import { CheckboxDemo } from "./AdvancedFilters/Check_box";
import { PriceMinToMax } from "./AdvancedFilters/Price_min_max";
import { PriceRange } from "./AdvancedFilters/Price_range";

export const AdvcancedFilterProperty = () => {
  return (
    <section className="pr-[20px] ">
      <PriceMinToMax />
      <CheckboxDemo />
      <PriceRange />
    </section>
  );
};
