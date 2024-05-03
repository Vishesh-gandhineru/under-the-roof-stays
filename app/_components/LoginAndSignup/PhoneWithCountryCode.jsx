"use client"

import * as React from "react"
import {  ChevronsUpDown } from "lucide-react"


import { Button } from "../ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import { ScrollArea } from "../ui/scroll-area"


import { CountryCode } from "@/app/_util/CountryCodeWithImage"

const frameworks = CountryCode;

export function PhoneWithCountryCode({setCountryCode}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("+91")

  return (
    <section>    
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[60px] justify-between p-3 rounded-r-none border-r-0"
        >
          {value
            ? frameworks.find((framework) => framework.dial_code === value)?.emoji
            : "🌍"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
            <CommandList>
            <ScrollArea className="h-72">
          <CommandInput placeholder="Search country..." />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.code}
                value={framework.name}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : framework.dial_code)
                  setCountryCode(currentValue === value ? "" : framework.dial_code)
                  setOpen(false)
                }}
              >
                <div className="flex justify-between items-center w-full px-2">
                    <div>{framework.emoji} {framework.name}</div>
                    <div>{framework.dial_code}</div>
                </div>
                 
              </CommandItem>
            ))}
          </CommandGroup>
            </ScrollArea>
            </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    </section>
  )
}
