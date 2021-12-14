import React, { FC, useCallback, useEffect } from "react";

import AdminPanelPageLayout from "../components/AdminPanelPageLayout";
import { useTypedSelector } from "../../../hooks";
import { useDispatch } from "react-redux";
import {
  CHANGE_ADMIN_PAGE,
  DELETE_MOVIE_REQUEST,
  GET_ADMIN_MOVIES_REQUEST,
} from "../actions";

/*interface IFile {
  name: string;
  type: string;
}*/

const AdminPanelPageContainer: FC = () => {
  const dispatch = useDispatch();

  //const [selectedFile, setSelectedFile] = useState<IFile[]>([]);

  const { moviesList, moviesTotalCount, currentPage, isLoading } =
    useTypedSelector((state) => state.adminPage);

  const pagesCount = Math.ceil(moviesTotalCount / 5);

  const handleDeleteMovie = useCallback(
    (id: string) => {
      //event.preventDefault();
      dispatch(DELETE_MOVIE_REQUEST(id));
    },
    [dispatch]
  );

  const handlePageChange = useCallback(
    (event, page) => {
      if (page !== currentPage) {
        dispatch(CHANGE_ADMIN_PAGE(page));
      }
    },
    [dispatch, currentPage]
  );

  /*const handleFileInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      console.log(event.target.files);
      const files: FileList | null = event.target!.files;
      setSelectedFile(event.target!.files[0]!);
    },
    [selectedFile]
  );*/

  /*const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("file: ", file);
    setSelectedFile([...])
  }*/

  /*const handleFileInputChange = (files: IFile[]) => {
    setSelectedFile((currentFiles) => {
      return [files[0]];
    });
  };*/

  useEffect(() => {
    dispatch(GET_ADMIN_MOVIES_REQUEST(currentPage));
  }, [dispatch, currentPage]);

  return (
    <AdminPanelPageLayout
      moviesList={moviesList}
      isLoading={isLoading}
      currentPage={currentPage}
      pagesCount={pagesCount}
      handleDeleteMovie={handleDeleteMovie}
      handlePageChange={handlePageChange}
      //selectedFile={selectedFile}
      //setSelectedFile={setSelectedFile}
      //handleFileInputChange={handleFileInputChange}
    />
  );
};

export default AdminPanelPageContainer;
