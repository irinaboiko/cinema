import React, { ChangeEvent, FC } from "react";
import { Pagination } from "@mui/material";

interface DefaultPaginationProps {
  currentPage: number;
  pagesCount: number;
  handlePageChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const DefaultPagination: FC<DefaultPaginationProps> = ({
  currentPage,
  pagesCount,
  handlePageChange,
}) => {
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
