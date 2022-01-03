import React, { FC, SyntheticEvent, useEffect, useState } from "react";

import UserPageLayout from "../components/UserPageLayout";
import { useTypedSelector } from "../../../hooks";
import { TabValues } from "../dto/user.dtos";
import { useDispatch } from "react-redux";
import { GET_USER_MOVIES_COLLECTION_REQUEST } from "../actions";

const UserPageContainer: FC = () => {
  const dispatch = useDispatch();

  const [tabValue, setTabValue] = useState<TabValues>(TabValues.isFavorite);

  const { moviesCollectionList } = useTypedSelector((state) => state.userPage);
  const { userInfo } = useTypedSelector((state) => state.auth);
  const userId = userInfo._id;

  const handleTabChange = (event: SyntheticEvent, newTabValue: TabValues) => {
    setTabValue(newTabValue);
    dispatch(
      GET_USER_MOVIES_COLLECTION_REQUEST({ userId, option: newTabValue })
    );
  };

  useEffect(() => {
    dispatch(GET_USER_MOVIES_COLLECTION_REQUEST({ userId, option: tabValue }));
  }, [dispatch]);

  return (
    <UserPageLayout
      userInfo={userInfo}
      tabValue={tabValue}
      handleTabChange={handleTabChange}
      moviesCollectionList={moviesCollectionList}
    />
  );
};

export default UserPageContainer;
