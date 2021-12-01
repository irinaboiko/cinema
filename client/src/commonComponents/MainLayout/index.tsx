import React, { FC } from "react";

import Header from "../Header";
import { useTypedSelector } from "../../hooks";

const MainLayout: FC = ({ children }) => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <div>
      <div>{isAuth && <Header />}</div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
