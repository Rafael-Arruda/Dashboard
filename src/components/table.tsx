import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const data = [
    {
      product: "TailGrids",
      category: "Ui Kits",
      paymentMethod: "Credit Card",
      totalAmount: "$250.00",
    },
    {
      product: "GrayGrids",
      category: "Templates",
      paymentMethod: "PayPal",
      totalAmount: "$150.00",
    },
    {
      product: "Uideck",
      category: "Templates",
      paymentMethod: "Bank Transfer",
      totalAmount: "$350.00",
    },
    {
      product: "FormBold",
      category: "SaaS",
      paymentMethod: "Credit Card",
      totalAmount: "$450.00",
    },
    {
      product: "NextAdmin",
      category: "Templates",
      paymentMethod: "PayPal",
      totalAmount: "$550.00",
    },
    {
      product: "FormBuilder",
      category: "Templates",
      paymentMethod: "Bank Transfer",
      totalAmount: "$200.00",
    },
    {
      product: "AyroUI",
      category: "Templates",
      paymentMethod: "Credit Card",
      totalAmount: "$300.00",
    },
  ]
  
  export function TableDemo() {
    return (
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((invoice) => (
            <TableRow key={invoice.product}>
              <TableCell className="font-medium">{invoice.product}</TableCell>
              <TableCell>{invoice.category}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  