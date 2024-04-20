import CompareSection from "../../_components/ComparePropertiesComponents/CompareSection";

export default function compare(){
    return(
        <main className="m-8">
      <article className="h-fit m-8">
        <section>
        <h1 className="text-red-800 text-5xl font-bold uppercase text-center">
          Compare Properties
        </h1>
        </section>
        <CompareSection />
        
      </article>
    </main>
    )
}