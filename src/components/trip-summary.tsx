import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BookingComSVG, SuitcaseSVG } from "@/components/ui/icons";

const tableRows = [
  {
    statusColor: "#5DA8DF",
    title: "Hotel Booked in Bucharest",
    date: "7th - 9th July",
    paymentStatus: "Paid",
    paymentStatusBgColor: "bg-green-100",
    paymentStatusTextColor: "text-green-400",
    icon: <BookingComSVG />,
  },
  {
    statusColor: "#FF5733",
    title: "Flight to Paris",
    date: "10th July",
    paymentStatus: "Unpaid",
    paymentStatusBgColor: "bg-yellow-100",
    paymentStatusTextColor: "text-yellow-400",
    icon: <BookingComSVG />,
  },
  {
    statusColor: "#4CAF50",
    title: "Car Rental in Berlin",
    date: "15th - 20th July",
    paymentStatus: "Paid",
    paymentStatusBgColor: "bg-green-100",
    paymentStatusTextColor: "text-green-400",
    icon: <BookingComSVG />,
  },
  {
    statusColor: "#FFC107",
    title: "Dinner Reservation in Rome",
    date: "21st July",
    paymentStatus: "Unpaid",
    paymentStatusBgColor: "bg-yellow-100",
    paymentStatusTextColor: "text-yellow-400",
    icon: <BookingComSVG />,
  },
  {
    statusColor: "#9C27B0",
    title: "Concert Tickets in Vienna",
    date: "25th July",
    paymentStatus: "Paid",
    paymentStatusBgColor: "bg-green-100",
    paymentStatusTextColor: "text-green-400",
    icon: <BookingComSVG />,
  },
  {
    statusColor: "#2196F3",
    title: "Museum Visit in Amsterdam",
    date: "30th July",
    paymentStatus: "Unpaid",
    paymentStatusBgColor: "bg-yellow-100",
    paymentStatusTextColor: "text-yellow-400",
    icon: <BookingComSVG />,
  },
  {
    statusColor: "#FF9800",
    title: "City Tour in Barcelona",
    date: "1st August",
    paymentStatus: "Paid",
    paymentStatusBgColor: "bg-green-100",
    paymentStatusTextColor: "text-green-400",
    icon: <BookingComSVG />,
  },
  {
    statusColor: "#E91E63",
    title: "Beach Resort in Ibiza",
    date: "5th - 10th August",
    paymentStatus: "Unpaid",
    paymentStatusBgColor: "bg-yellow-100",
    paymentStatusTextColor: "text-yellow-400",
    icon: <BookingComSVG />,
  },
];

const TripSummary: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div>
          Current Trip Cost: $1500s
          <div className="flex gap-2 text-sm items-center">
            <SuitcaseSVG />3 items added to trip
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="min-w-[500px] ">
        <SheetHeader>
          <SheetTitle>Trip Summary</SheetTitle>
        </SheetHeader>
        <Table>
          <TableHeader>
            <TableRow className="border-none">
              <TableHead></TableHead>
              <TableHead>Description</TableHead>

              <TableHead>Dates</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Provider</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows.map((row, index) => (
              <TableRow key={index} className="text-muted-foreground text-xs">
                <TableCell className="font-medium">
                  <div
                    className="w-3 h-3 rounded-full cursor-pointer"
                    style={{ backgroundColor: row.statusColor }}
                  />
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <div
                    className={`w-max p-1 rounded-lg mx-auto ${row.paymentStatusBgColor} ${row.paymentStatusTextColor}`}
                  >
                    {row.paymentStatus}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">{row.icon}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4">Total Cost: $1200 || Edit Trip Details</div>
      </SheetContent>
    </Sheet>
  );
};

export default TripSummary;
