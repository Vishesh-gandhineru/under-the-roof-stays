import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/app/_components/ui/popover";
import { Button } from "@/app/_components/ui/button";


export default function AddGuest () {
    return (
        <Popover>
            <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <h1>Demo</h1>
      </PopoverContent>
        </Popover>
    )
}