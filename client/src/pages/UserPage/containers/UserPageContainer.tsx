import React, { FC, useState } from "react";

import UserPageLayout from "../components/UserPageLayout";
import { useTypedSelector } from "../../../hooks";

const UserPageContainer: FC = () => {
  const [state, setState] = useState("");

  const { userInfo } = useTypedSelector((state) => state.auth);

  return <UserPageLayout userInfo={userInfo} />;
};

export default UserPageContainer;
