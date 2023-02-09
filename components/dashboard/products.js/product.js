import HeadCard from "../headCard";

export default function Product({ product = "1234123" }) {
  return <HeadCard title={product + "سفارش شماره "} />;
}
