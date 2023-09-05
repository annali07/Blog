import React from "react";
import { Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

function HomeHeading({ heading, postHeading }) {
  const location = useLocation();
  const isHomePage = (location.pathname === "/" || location.pathname ==="/about");
  return (
    <p className="p1">
    -------
    <Link className="heading" to="/">{heading}</Link>
    {isHomePage ? null : postHeading && ` / ${postHeading}`}
  </p>
  );
}

export default HomeHeading;
