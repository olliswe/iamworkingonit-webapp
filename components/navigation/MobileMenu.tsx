import React from "react";
import MobileMainNav from "components/navigation/MobileMainNav";
import MobileProfileMenu from "components/navigation/MobileProfileMenu";
import clsx from "clsx";
import { IMainRoutes } from "components/layout/AppLayout";

const MobileMenu = ({
  open,
  routes,
  onLogout
}: {
  open: boolean;
  routes: IMainRoutes[];
  onLogout: any;
}) => {
  return (
    <div className={clsx("lg:hidden", !open && "hidden")}>
      <MobileMainNav routes={routes} />
      <MobileProfileMenu onLogout={onLogout} />
    </div>
  );
};

export default MobileMenu;
