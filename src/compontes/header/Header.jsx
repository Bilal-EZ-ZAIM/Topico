import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";

const Header = () => {
  return (
    <div className="bg-white sticky top-0 z-50">
      <Header1 />
      <hr />
      <Header2 />
    </div>
  );
};

export default Header;
