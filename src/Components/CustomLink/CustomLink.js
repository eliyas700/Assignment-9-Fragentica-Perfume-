import React from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#DC143C" : "#130f40",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
