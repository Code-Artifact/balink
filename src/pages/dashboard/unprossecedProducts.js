import HeadCard from "components/dashboard/headCard";
import DashboardLayout from "components/dashboradLayout";
import OrderList from "components/dashboard/orderList";
import TicketReceipt from "components/dashboard/ticketLikeReceipt";

export default function UnprossecedProduct() {
  const Product = [
    { index: 1, type: "sec" },
    { index: 2, type: "sec" },
    { index: 3, type: "sec" },
    { index: 4, type: "sec" },
    { index: 5, type: "sec" },
    { index: 6, type: "sec" },
    { index: 7, type: "sec" },
  ];
  return (
    <DashboardLayout>
      <HeadCard title={"پردازش نشده"} />
      <OrderList title={"لیست سفارشات این بخش"}>
        {Product.map((product) => (
          <TicketReceipt key={product.key} type={product.type} index={product.index} />
        ))}
      </OrderList>
    </DashboardLayout>
  );
}
