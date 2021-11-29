import React, { FC } from "react";
import { UserDto } from "../../../pages/UserPage/dto/user.dtos";

interface UserCardProps {
  userInfo: UserDto;
}

const UserCard: FC<UserCardProps> = ({ userInfo }) => {
  return (
    <div>
      <h3>{userInfo.name}</h3>
      <p>{userInfo._id}</p>
      <h5>{userInfo.email}</h5>
      <p>{userInfo.role}</p>
    </div>
  );
};

export default UserCard;
