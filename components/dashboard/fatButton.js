import Link from "next/link";

export default function FatButton({ children, href, text, color }) {
  let classes;
  // classes += color;

  switch (color) {
    case "greenblue":
      classes = "border-t-2 w-1/2 border-greenblue";
      break;
    case "yellowgreen":
      classes = "border-t-2 w-1/2 border-yellowgreen";
      break;
    case "blueJean":
      classes = "border-t-2 w-1/2 border-blueJean";
      break;
    case "pinkred":
      classes = "border-t-2 w-1/2 border-pinkred";
      break;
    case "pur":
      classes = "border-t-2 w-1/2 border-pur";
      break;
    case "purpleblue":
      classes = "border-t-2 w-1/2 border-purpleblue";
      break;

    default:
      classes = "border-t-2 w-1/2";
      break;
  }

  return (
    <Link
      href={href}
      className="flex flex-col gap-2 items-center group py-4 max-sm:py-2 relative justify-center rounded-md border border-transparent bg-gray-200  text-base font-medium hover:bg-gray-300"
    >
      {children}
      <h3 className="text-pri text-sm max-sm:text-xs">{text} </h3>
      <div className={classes} />
    </Link>
  );
}
