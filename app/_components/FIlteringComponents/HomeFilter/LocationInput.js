// "use client"
// import React, { useState , useRef , useCallback } from "react";
// import { Divide } from "lucide-react";
// import { Input } from "../../ui/input";
// import { Button } from "@/app/_components/ui/button"
// import { Label } from "@/app/_components/ui/label"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/app/_components/ui/popover"

// import {
//     Calculator,
//     Calendar,
//     CreditCard,
//     Settings,
//     Smile,
//     User,
//   } from "lucide-react"
   
//   import {
//     Command  ,
//     CommandEmpty,
//     CommandGroup,
//     CommandInput,
//     CommandItem,
//     CommandList,
//     CommandSeparator,
//     CommandShortcut,
//   } from "@/app/_components/ui/command"


// export default function LocationInput({country , city , state , taluka}) {

//     const [isOpen, setOpen] = useState(false)
//     const [inputValue , setInputValue] = useState('');
//     cosnt [selected , setSelected] = useState(value);
//     const inputRef = useRef(null)
//     const handleKeyDown = useCallback(
//         (event) => {
//           const input = inputRef.current
//           if (!input) {
//             return
//           }
          
//           if (!isOpen) {
//             setOpen(true)
//           }

//           if (event.key === "Enter" && input.value !== "") {
//             const optionToSelect = value.find((value) => value.label === input.value)
//             if (optionToSelect) {
//               setSelected(optionToSelect)
//               onValueChange?.(optionToSelect)
//             }
//           }

//           if (event.key === "Escape") {
//             input.blur()
//           }
        
//         },
//         [isOpen]
//         )
//         const handleBlur = useCallback(() => {
//             setOpen(false)
//             setInputValue(selected?.label)
//           }, [selected])

//           const handleSelectOption = useCallback(
//             (selectedOption) => {
//               setInputValue(selectedOption.label)
        
//               setSelected(selectedOption)
//               onValueChange?.(selectedOption)
        
//               // This is a hack to prevent the input from being focused after the user selects an option
//               // We can call this hack: "The next tick"
//               setTimeout(() => {
//                 inputRef?.current?.blur()
//               }, 0)
//             },
//             [onValueChange]
//           )

 
//     return (
//         <div>        
//     <Command className="rounded-lg border shadow-md" onKeyDown={handleKeyDown}>
//       <CommandInput  
//         ref={inputRef}
//         value={inputValue}
//         onValueChange={isLoading ? undefined : setInputValue}
//         onBlur={handleBlur}
      
//       placeholder="Type a command or search..." />
//       <CommandList>
//         <CommandEmpty>No results found.</CommandEmpty>
//         <CommandGroup heading="Suggestions">
//           <CommandItem>
//             <Calendar className="mr-2 h-4 w-4" />
//             <span>Calendar</span>
//           </CommandItem>
//           <CommandItem>
//             <Smile className="mr-2 h-4 w-4" />
//             <span>Search Emoji</span>
//           </CommandItem>
//           <CommandItem>
//             <Calculator className="mr-2 h-4 w-4" />
//             <span>Calculator</span>
//           </CommandItem>
//         </CommandGroup>
//         <CommandSeparator />
//         <CommandGroup heading="Settings">
//           <CommandItem>
//             <User className="mr-2 h-4 w-4" />
//             <span>Profile</span>
//             <CommandShortcut>⌘P</CommandShortcut>
//           </CommandItem>
//           <CommandItem>
//             <CreditCard className="mr-2 h-4 w-4" />
//             <span>Billing</span>
//             <CommandShortcut>⌘B</CommandShortcut>
//           </CommandItem>
//           <CommandItem>
//             <Settings className="mr-2 h-4 w-4" />
//             <span>Settings</span>
//             <CommandShortcut>⌘S</CommandShortcut>
//           </CommandItem>
//         </CommandGroup>
//       </CommandList>
//     </Command>
        
//         </div>
//     )
// }
"use client"
import { CommandGroup, CommandItem, CommandList, CommandInput } from "@/app/_components/ui/command"
import { Command as CommandPrimitive } from "cmdk"
import { useState, useRef, useCallback } from "react"

import { Skeleton } from "@/app/_components/ui/skeleton"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

const AutoComplete = ({
  options,
  placeholder,
  emptyMessage,
  value,
  onValueChange,
  disabled,
  isLoading = false,
}) => {
  const inputRef = useRef(null)

  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState(value)
  const [inputValue, setInputValue] = useState(value?.label || "")

  const handleKeyDown = useCallback(
    (event) => {
      const input = inputRef.current
      if (!input) {
        return
      }

      if (!isOpen) {
        setOpen(true)
      }

      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options.find((option) => option.label === input.value)
        if (optionToSelect) {
          setSelected(optionToSelect)
          onValueChange?.(optionToSelect)
        }
      }

      if (event.key === "Escape") {
        input.blur()
      }
    },
    [isOpen, options, onValueChange]
  )

  const handleBlur = useCallback(() => {
    setOpen(false)
    setInputValue(selected?.label)
  }, [selected])

  const handleSelectOption = useCallback(
    (selectedOption) => {
      setInputValue(selectedOption.label)

      setSelected(selectedOption)
      onValueChange?.(selectedOption)

      setTimeout(() => {
        inputRef?.current?.blur()
      }, 0)
    },
    [onValueChange]
  )

  return (
    <CommandPrimitive onKeyDown={handleKeyDown}>
      <div>
        <CommandInput
          ref={inputRef}
          value={inputValue}
          onValueChange={isLoading ? undefined : setInputValue}
          onBlur={handleBlur}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          className="text-base"
        />
      </div>
      <div className="mt-1 relative">
        {isOpen ? (
          <div className="absolute top-0 z-10 w-full rounded-xl bg-stone-50 outline-none animate-in fade-in-0 zoom-in-95">
            <CommandList className="ring-1 ring-slate-200 rounded-lg">
              {isLoading ? (
                <CommandPrimitive.Loading>
                  <div className="p-1">
                    <Skeleton className="h-8 w-full" />
                  </div>
                </CommandPrimitive.Loading>
              ) : null}
              {options.length > 0 && !isLoading ? (
                <CommandGroup>
                  {options.map((option) => {
                    const isSelected = selected?.value === option.value
                    return (
                      <CommandItem
                        key={option.value}
                        value={option.label}
                        onMouseDown={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                        }}
                        onSelect={() => handleSelectOption(option)}
                        className={cn("flex items-center gap-2 w-full", !isSelected ? "pl-8" : null)}
                      >
                        {isSelected ? <Check className="w-4" /> : null}
                        {option.label}
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              ) : null}
              {!isLoading ? (
                <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-sm text-center">
                  {emptyMessage}
                </CommandPrimitive.Empty>
              ) : null}
            </CommandList>
          </div>
        ) : null}
      </div>
    </CommandPrimitive>
  )
}

export default AutoComplete;






