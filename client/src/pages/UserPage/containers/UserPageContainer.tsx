import React, { FC } from "react";

import UserPageLayout from "../components/UserPageLayout";
import { useTypedSelector } from "../../../hooks";

const UserPageContainer: FC = () => {
  const { userInfo } = useTypedSelector((state) => state.auth);

  return <UserPageLayout userInfo={userInfo} />;
};

export default UserPageContainer;
