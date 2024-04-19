import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";


export default function CustomTooltip ({content , tooltipIcon}) {
 return (
  <TooltipProvider delayDuration={100}>
  <Tooltip>
    <TooltipTrigger>{tooltipIcon}</TooltipTrigger>
    <TooltipContent >
      <p>{content}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
 )
}