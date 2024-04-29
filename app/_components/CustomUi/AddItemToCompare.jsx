import * as React from "react"
import { PlusCircle } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"

import Properties_slider from "../PropertiesComponents/SinglePropertyPage/Properties_slider"



export default function AddItemToCompare() {

  return (
    <Drawer>
      <DrawerTrigger asChild>     
              <PlusCircle/>    
      </DrawerTrigger>
      <DrawerContent className="px-8 py-4">
        <Properties_slider />
      </DrawerContent>
    </Drawer>
  )
}
