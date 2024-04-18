import { AdvcancedFilterProperty } from "@/app/_components/FIlteringComponents/PropertiesPageFilter/AdvcancedFilterProperty";
import PropertiesGrid from "@/app/_components/PropertiesComponents/Properties_grid";

export default function Properties() {
  return (
    <main className="m-8">
      {/* <div className="h-20 m-8">
        <h1 className="text-red-800 text-[40px] font-bold uppercase text-center">
          Properties page
        </h1>
      </div> */}

      <section className="flex">
        <div className="w-[100%] border-r-2 border-r-[#bababa] mt-[25px] pt-[15px]  border-solid ">
          <AdvcancedFilterProperty/>
        </div>
        <PropertiesGrid/>
      </section>
    </main>
  );
}
