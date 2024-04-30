import CompareSection from "../../_components/ComparePropertiesComponents/CompareSection";
import { FetchProperty } from "@/app/_util/PropertiesAPI";

export default async function compare(){
  
  const body = {
    skip: 1,
    limit: 6
  }
   const propertiesList = await FetchProperty(body);
   
    return(
        <main className="m-8">
      <article className="h-fit m-8">
        <section>
        <h1 className="text-red-800 text-5xl font-bold uppercase text-center">
          Compare Properties
        </h1>
        </section>
        <CompareSection propertiesList={propertiesList}/>
        
      </article>
    </main>
    )
}