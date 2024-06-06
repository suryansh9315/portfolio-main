import React from "react";

const Layout = ({ children, classname = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block p-32 z-0 bg-light ${classname}`}
    >
      {children}
    </div>
  );
};

export default Layout;
