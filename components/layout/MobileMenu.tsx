import React from "react";
import MobileMainNav from "components/layout/MobileMainNav";
import MobileProfileMenu from "components/layout/MobileProfileMenu";

const MobileMenu = () => {
  return (
    <div className={`hidden lg:hidden`}>
      <MobileMainNav />
      <MobileProfileMenu />
    </div>
  );
};

export default MobileMenu;
