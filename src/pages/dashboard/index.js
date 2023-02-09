import CalChart from "components/dashboard/calChart";
import Info from "components/dashboard/info";
import ManagementBoard from "components/dashboard/managementBoard";
import NotifBox from "components/dashboard/notifBox";
import TicketOrder from "components/dashboard/ticketOrder";
import DashboardLayout from "components/dashboradLayout";

export default function Dashboard() {
  const date = new Date();
  const faDate = new Intl.DateTimeFormat("fa", {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
    calendar: "persian",
  }).format(date);
  return (
    <DashboardLayout>
      <Info Tdate={faDate} />
      <ManagementBoard />
      <TicketOrder />
      <CalChart />
      <NotifBox />
    </DashboardLayout>
  );
}
