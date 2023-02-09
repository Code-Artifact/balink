import HeadCard from "components/dashboard/headCard";
import OrderList from "components/dashboard/orderList";
import ReportCard from "components/dashboard/reportCard";
import TicketReceipt from "components/dashboard/ticketLikeReceipt";
import DashboardLayout from "components/dashboradLayout";

export default function OrderManagment() {
  const Product = [
    { index: 1, type: "pn" },
    { index: 2, type: "ps" },
    { index: 3, type: "dp" },
    { index: 4, type: "es" },
    { index: 5, type: "ts" },
    { index: 6, type: "cs" },
    { index: 7, type: "pn" },
  ];
  return (
    <DashboardLayout>
      <HeadCard title={"مدیریت سفارشات"} />
      <ReportCard />
      <OrderList>
        {Product.map((product) => (
          <TicketReceipt type={product.type} index={product.index} />
        ))}
      </OrderList>
    </DashboardLayout>
  );
}
