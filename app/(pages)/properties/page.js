
import { AdvcancedFilterProperty } from "@/app/_components/FIlteringComponents/PropertiesPageFilter/AdvcancedFilterProperty";
import PropertiesGrid from "@/app/_components/PropertiesComponents/Properties_grid";
import { HomePageFilter } from "@/app/_components/FIlteringComponents/HomePageFilter";
import { Suspense } from "react";



export default function Properties({searchParams}) {

  const  body = {
    skip: 0,
    limit: 20,
    location: {
      city: searchParams.location ? searchParams.location : "",
    }
 }

 
  return (
    <main className="m-8">
      <div className="h-20 m-8">
        <h1 className="text-red-800 text-[40px] font-bold uppercase text-center">
          Properties page
        </h1>
      </div>
      <section className="flex gap-5">
        <div className="w-[400px] border-r-2 border-r-[#bababa] mt-[25px] pt-[15px]  border-solid ">
          <AdvcancedFilterProperty/>
        </div>
        <div>
      <HomePageFilter/>
      <Suspense fallback={<p>Loading</p>}>

        <PropertiesGrid body={body}/>

      </Suspense>

        </div>
      </section>
    </main>
  );
}
