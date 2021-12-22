import React, { FC, SyntheticEvent, useState } from "react";
import { UserDto } from "../dto/user.dtos";
import UserCard from "../../../commonComponents/Cards/UserCard";
import { Box } from "@material-ui/core";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export enum TabValues {
  isFavorite = "is_favorite",
  isWatchLater = "is_watch_later",
  isWatched = "is_watched",
}

interface ILoginPageLayoutProps {
  userInfo: UserDto;
}

const UserPageLayout: FC<ILoginPageLayoutProps> = ({ userInfo }) => {
  const [value, setValue] = useState<TabValues>(TabValues.isFavorite);

  const handleChange = (event: SyntheticEvent, newValue: TabValues) => {
    setValue(newValue);
  };

  return (
    <div style={{ padding: 20 }}>
      <UserCard userInfo={userInfo} />
      <Box style={{ marginBottom: 20 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} variant="fullWidth">
              <Tab label="Favorites" value={TabValues.isFavorite} />
              <Tab label="Watch Later" value={TabValues.isWatchLater} />
              <Tab label="Watched" value={TabValues.isWatched} />
            </TabList>
          </Box>
          <TabPanel value={TabValues.isFavorite}>Favorites</TabPanel>
          <TabPanel value={TabValues.isWatchLater}>Watch Later</TabPanel>
          <TabPanel value={TabValues.isWatched}>Watched</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default UserPageLayout;
