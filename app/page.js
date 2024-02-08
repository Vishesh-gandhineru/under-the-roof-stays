import Image from "next/image";
import PropertiesGrid from "./_components/PropertiesComponents/Properties_grid";

export default function Home() {
  return (
    <div>
    <main className="m-8">
      <div className="h-20 m-8">
      <h1 className="text-red-800 text-5xl font-bold uppercase text-center">Home</h1>
      </div>
    </main>
    <PropertiesGrid/>

    </div>
  );
}
