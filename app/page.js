
import PropertiesGrid from "./_components/PropertiesComponents/Properties_grid";
import {HomePageFilter} from "./_components/FIlteringComponents/HomePageFilter";


export default function Home() {
  return (
    <main className="m-8">
      <div className="h-20 m-8">
      <h1 className="text-red-800 text-5xl font-bold uppercase text-center">Home</h1>
      </div>
    <HomePageFilter/>
    <PropertiesGrid/>
   
    </main>

    
  );
}
