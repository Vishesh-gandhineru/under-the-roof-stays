import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Info } from "lucide-react";


export default function CustomTooltip ({content}) {
 return (
  <TooltipProvider delayDuration={100}>
  <Tooltip>
    <TooltipTrigger><Info /></TooltipTrigger>
    <TooltipContent >
      <p>{content}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
 )
}