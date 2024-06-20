import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/app/_components/ui/table";
import getSymbolFromCurrency from "currency-symbol-map";

export default function PriceBreakDown({ QuotationData }) {
  const { currency, breakdown } = QuotationData;

 const extraCharges = breakdown.charges.itemized


  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <div className="flex flex-col gap-6">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold">Price Breakdown</h1>
          <p className="text-muted-foreground">
            See the details of what you're paying for.
          </p>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {extraCharges.map((item, index) => {
                return (
                <TableRow key={index}>
                  <TableCell>{item.chargeName}</TableCell>
                  <TableCell className="text-right">
                    {item.value} {getSymbolFromCurrency(currency)}
                  </TableCell>
                </TableRow>

                )
              })}
              <TableRow>
                <TableCell>Base Room Rent</TableCell>
                <TableCell className="text-right">
                  {breakdown.rentOnly} {getSymbolFromCurrency(currency)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
