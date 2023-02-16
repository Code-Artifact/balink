import Link from "next/link";
import { useState, useEffect } from "react";
const Color = {
  pur: "#8854D0",
  greenblue: "#2D98DA",
  blueJean: "#4B6584",
  pinkred: "#EB3B5A",
  purpleblue: "#3867D6",
  yellowgreen: "#20BF6B",
};
export default function FatButton({ children, href, text, color }) {
  const [classes, setClasses] = useState("");
  useEffect(() => {
    setClasses(
      `flex flex-col gap-2 items-center group py-4 max-sm:py-2 relative justify-center rounded-md border border-transparent bg-gray-200  text-base font-medium hover:bg-gray-300 underline underline-offset-8 decoration-2`
    );
  }, []);

  return (
    <Link
      href={href}
      className={classes}
      style={{ textDecorationColor: color ? Color[color] : "transparent" }}
    >
      {children}
      <h3 className="text-pri text-sm max-sm:text-xs">{text} </h3>
    </Link>
  );
}
