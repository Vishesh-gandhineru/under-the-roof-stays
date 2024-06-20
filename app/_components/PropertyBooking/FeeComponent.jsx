/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xJ8t4Gm2svZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/app/_components/ui/table"
import { Checkbox } from "@/app/_components/ui/checkbox"
import getSymbolFromCurrency from "currency-symbol-map"

export default function FeeComponent({property, charges}) {

 const {fees} = property;
 const { required , optional} = charges;
  
  const [selectedFees, setSelectedFees] = useState([])
  const handleFeeSelect = (feeCode) => {
    if (selectedFees.includes(feeCode)) {
      setSelectedFees(selectedFees.filter((code) => code !== feeCode))
    } else {
      setSelectedFees([...selectedFees, feeCode])
    }
  }
  return (
    <div className="w-full max-w-3xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[32px]">
              <Checkbox
                checked={selectedFees.length === fees.length}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedFees(fees.map((fee) => fee.feeCode))
                  } else {
                    setSelectedFees([])
                  }
                }}
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Fee Type</TableHead>
            <TableHead>Fee Mode</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Taxable</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {optional.map((fee, index) => (
            <TableRow key={index}>
              <TableCell>
                <Checkbox
                  checked={selectedFees.includes(fee.feeCode)}
                  onCheckedChange={() => handleFeeSelect(fee.feeCode)}
                />
              </TableCell>
              <TableCell>{fee.chargeName}</TableCell>
              <TableCell>{fee.chargeType}</TableCell>
              <TableCell>{fee.chargeMode}</TableCell>
              <TableCell>
               {getSymbolFromCurrency(fee.currency)} {fee.itemPrice.toFixed(2)}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <CurrencyIcon className="w-4 h-4" />
                  <span>{fee.taxable ? "Yes" : "No"}</span>
                </div>
              </TableCell>
             
            </TableRow>
          ))}
          {required.map((fee, index) => (
            <TableRow key={index}>
              <TableCell>
              </TableCell>
              <TableCell>{fee.chargeName}</TableCell>
              <TableCell>{fee.chargeType}</TableCell>
              <TableCell>{fee.chargeMode}</TableCell>
              <TableCell>
               {getSymbolFromCurrency(fee.currency)} {fee.itemPrice.toFixed(2)}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <CurrencyIcon className="w-4 h-4" />
                  <span>{fee.taxable ? "Yes" : "No"}</span>
                </div>
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
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