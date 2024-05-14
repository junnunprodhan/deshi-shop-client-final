import DashboardDrawer from "@/component/Dashboard/DashboardDrawer/DashboardDrawer";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default layout;
