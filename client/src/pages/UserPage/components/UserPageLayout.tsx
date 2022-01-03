import React, { FC, SyntheticEvent, useState } from "react";
import { TabValues, UserDto } from "../dto/user.dtos";
import UserCard from "../../../commonComponents/Cards/UserCard";
import { Box } from "@material-ui/core";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { IMovie } from "../../MoviesPage/dto/movie.dtos";
import MovieCard from "../../../commonComponents/Cards/MovieCard";
import UserMovieCard from "../../../commonComponents/Cards/UserMovieCard";
import DefaultSpinner from "../../../commonComponents/Spinner/DefaultSpinner";

interface ILoginPageLayoutProps {
  userInfo: UserDto;
  tabValue: string;
  //handleTabChange: (event: SyntheticEvent, newTabValue: TabValues) => void;
  handleTabChange: any;
  moviesCollectionList: IMovie[];
  isLoading: boolean;
}

const UserPageLayout: FC<ILoginPageLayoutProps> = ({
  userInfo,
  tabValue,
  handleTabChange,
  moviesCollectionList,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <DefaultSpinner isOpen={isLoading} />
      ) : (
        <div style={{ padding: 20 }}>
          <UserCard userInfo={userInfo} />
          <Box style={{ marginBottom: 20 }}>
            <TabContext value={tabValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleTabChange} variant="fullWidth">
                  <Tab label="Favorites" value={TabValues.isFavorite} />
                  <Tab label="Watch Later" value={TabValues.isWatchLater} />
                  <Tab label="Watched" value={TabValues.isWatched} />
                </TabList>
              </Box>
              <TabPanel value={TabValues.isFavorite}>
                <div>
                  {moviesCollectionList.length > 0 ? (
                    moviesCollectionList.map((movie) => {
                      return <UserMovieCard movie={movie} key={movie._id} />;
                    })
                  ) : (
                    <p>There are no any movies</p>
                  )}
                </div>
              </TabPanel>
              <TabPanel value={TabValues.isWatchLater}>
                <div>
                  {moviesCollectionList.length > 0 ? (
                    moviesCollectionList.map((movie) => {
                      return <UserMovieCard movie={movie} key={movie._id} />;
                    })
                  ) : (
                    <p>There are no any movies</p>
                  )}
                </div>
              </TabPanel>
              <TabPanel value={TabValues.isWatched}>
                <div>
                  {moviesCollectionList.length > 0 ? (
                    moviesCollectionList.map((movie) => {
                      return <UserMovieCard movie={movie} key={movie._id} />;
                    })
                  ) : (
                    <p>There are no any movies</p>
                  )}
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      )}
    </>
  );
};

export default UserPageLayout;
