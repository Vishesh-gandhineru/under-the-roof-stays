

import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/app/_components/ui/resizable"
import SideBar from "./SideBar"
import RouterGuard from "../RouterGuard"



export default function DashboardLayout({ children }) {


  return (
    <RouterGuard>
    <div className="flex w-full">
      <ResizablePanelGroup className="max-w-full h-full" direction="horizontal">
        <ResizablePanel defaultSize={15} minSize={5} maxSize={15}>
         <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75} className="p-10">
            {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
    </RouterGuard>
  )
}

