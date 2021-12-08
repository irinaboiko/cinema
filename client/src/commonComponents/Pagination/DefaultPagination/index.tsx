import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "@mui/material";

import { CHANGE_PAGE } from "../../../pages/MoviesPage/actions";

interface DefaultPaginationProps {
  currentPage: number;
  pagesCount: number;
}

const DefaultPagination: FC<DefaultPaginationProps> = ({
  currentPage,
  pagesCount,
}) => {
  const dispatch = useDispatch();

  const handlePageChange = useCallback(
    (event, page) => {
      if (page !== currentPage) {
        dispatch(CHANGE_PAGE(page));
      }
    },
    [dispatch, currentPage]
  );

  return (
    <Pagination
      page={currentPage}
      count={pagesCount}
      color="secondary"
      onChange={handlePageChange}
    />
  );
};

export default DefaultPagination;
