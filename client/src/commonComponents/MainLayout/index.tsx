import React, { FC } from "react";

import Header from "../Header";

const MainLayout: FC = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
