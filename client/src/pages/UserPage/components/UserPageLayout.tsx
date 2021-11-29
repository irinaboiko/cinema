import React, { FC } from "react";
import { UserDto } from "../dto/user.dtos";
import UserCard from "../../../commonComponents/Cards/UserCard";

interface ILoginPageLayoutProps {
  userInfo: UserDto;
}

const UserPageLayout: FC<ILoginPageLayoutProps> = ({ userInfo }) => {
  return (
    <div>
      <UserCard userInfo={userInfo} />
    </div>
  );
};

export default UserPageLayout;
