
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/app/_components/ui/carousel"
import { Card } from "@/app/_components/ui/card"

export default function FeeComponent({property}) {
  const fees = [
    {
      feeCode: "TRANS_FEE",
      feeType: "Transaction Fee",
      feeMode: "Flat",
      currency: "USD",
      amount: 2.99,
      isTaxable: true,
      applicableTaxPercentage: 10,
    },
    {
      feeCode: "SERV_FEE",
      feeType: "Service Fee",
      feeMode: "Percentage",
      currency: "USD",
      amount: 5,
      isTaxable: false,
      applicableTaxPercentage: 0,
    },
    {
      feeCode: "PROC_FEE",
      feeType: "Processing Fee",
      feeMode: "Flat",
      currency: "EUR",
      amount: 1.99,
      isTaxable: true,
      applicableTaxPercentage: 20,
    },
  ]
  return (
    <Carousel className="w-[400px]">
      <CarouselContent>
        {fees.map((fee, index) => (
          <CarouselItem key={index}>
            <Card className="p-6 grid gap-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{fee.feeType}</span>
                  <span className="font-medium">
                    {fee.currency} {fee.amount.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Fee Code: {fee.feeCode}</span>
                  <span>Fee Mode: {fee.feeMode}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CurrencyIcon className="w-4 h-4" />
                  <span>Taxable: {fee.isTaxable ? "Yes" : "No"}</span>
                </div>
                {fee.isTaxable && (
                  <div className="flex items-center gap-2">
                    <PercentIcon className="w-4 h-4" />
                    <span>Tax: {fee.applicableTaxPercentage}%</span>
                  </div>
                )}
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function CurrencyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}


function PercentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}