import { DatePickerWithRange } from "../FIlteringComponents/DateRangeFilter"


export default function BookingForm () {
    return (
        <section className="border p-5 rounded-2xl flex flex-col gap-3">
            <h2>Book your stay</h2>
            <div className="flex flex-col gap-3">
                <h4 className="font-bold">Check-in / Check-out</h4>
                <DatePickerWithRange/>  
            </div>
            <div>
            <h4 className="font-bold">Add guest</h4>
            </div>
        </section>
    )
}