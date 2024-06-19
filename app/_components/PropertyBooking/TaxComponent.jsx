import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/app/_components/ui/table";

export default function TaxComponent({ property }) {
  const taxData = property.taxes;
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Tax Code</TableHead>
            <TableHead>Included</TableHead>
            <TableHead className="w-[150px]">Percentage</TableHead>
            <TableHead>Tax Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {taxData.map((taxs) => {
            return (
              <TableRow key={taxs.taxCode}>
                <TableCell>{taxs.taxCode}</TableCell>
                <TableCell>
                  {!taxs.included ? "Not included" : "Included"}
                </TableCell>
                <TableCell>{taxs.percentage}</TableCell>
                <TableCell>{taxs.tax}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
