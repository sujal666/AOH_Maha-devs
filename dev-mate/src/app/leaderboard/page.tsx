"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    rank: 1,
    name: "John Doe",
    totalPoints: 250,
  },
  {
    rank: 2,
    name: "Jane Smith",
    totalPoints: 150,
  },
  {
    rank: 3,
    name: "Alice Johnson",
    totalPoints: 350,
  },
  {
    rank: 4,
    name: "Bob Brown",
    totalPoints: 450,
  },
  {
    rank: 5,
    name: "Eva Lee",
    totalPoints: 550,
  },
  {
    rank: 6,
    name: "Mike Wilson",
    totalPoints: 200,
  },
  {
    rank: 7,
    name: "Emily Davis",
    totalPoints: 300,
  },
  {
    rank: 8,
    name: "Chris Thompson",
    totalPoints: 400,
  },
];

export function TableDemo() {
  return (
    <div style={{ margin: '40px 300px' }}>
      <Table style={{ width: '500px' }}>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Total Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.rank}>
              <TableCell className="font-medium">{invoice.rank}</TableCell>
              <TableCell>{invoice.name}</TableCell>
              <TableCell>{invoice.totalPoints}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* You can keep the TableFooter or remove it as needed */}
        <TableFooter>
          {/* You can add totals or any additional information here */}
        </TableFooter>
      </Table>
    </div>
  );
}

export default TableDemo;
