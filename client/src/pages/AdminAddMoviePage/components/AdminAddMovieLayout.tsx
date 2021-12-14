import React, { ChangeEvent, FC, FormEvent } from "react";
import { Box, Button, Modal, TextField } from "@material-ui/core";
import { addMovieRequestDto } from "../../AdminPanelPage/dto/adminPage.dtos";
import BackButton from "../../../commonComponents/Buttons/BackButton/BackButton";

interface AddMovieFormProps {
  isLoading: boolean;
  formValues: addMovieRequestDto;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isShowModal: boolean;
  successMessage: string;
  handleCloseModal: () => void;
}

const AdminAddMovieLayout: FC<AddMovieFormProps> = ({
  isLoading,
  formValues,
  handleInputChange,
  handleSubmit,
  isShowModal,
  successMessage,
  handleCloseModal,
}) => {
  return (
    <div style={{ padding: "30px" }}>
      <BackButton />
      <form onSubmit={handleSubmit}>
        <Box>
          <TextField
            name="name"
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Box>
        {/*<Box>
                  <TextField
                    name="image"
                    type="file"
                    //value={selectedFile}
                    //onChange={(event) => setSelectedFile(event.target.files[0])}
                  />
                </Box>*/}
        <Box>
          <TextField
            name="genre"
            type="text"
            placeholder="Genre"
            value={formValues.genre}
            onChange={handleInputChange}
          />
        </Box>
        <Box>
          <TextField
            name="description"
            type="text"
            placeholder="Description"
            style={{ width: 500 }}
            multiline
            rows={6}
            value={formValues.description}
            onChange={handleInputChange}
          />
        </Box>
        <Box>
          <TextField
            name="runtime"
            type="text"
            placeholder="Runtime"
            value={formValues.runtime}
            onChange={handleInputChange}
          />
        </Box>
        <Box>
          <TextField
            name="age_rating"
            type="text"
            placeholder="Age Rating"
            value={formValues.age_rating}
            onChange={handleInputChange}
          />
        </Box>
        <Box>
          <TextField
            name="released"
            type="text"
            placeholder="Released"
            value={formValues.released}
            onChange={handleInputChange}
          />
        </Box>
        <Box>
          <TextField
            name="country"
            type="text"
            placeholder="Country"
            value={formValues.country}
            onChange={handleInputChange}
          />
        </Box>
        <Box>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            Create movie
          </Button>
        </Box>
      </form>
      <Modal
        open={isShowModal}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            backgroundColor: "#FFFFFF",
            transform: "translate(-50%, -50%)",
            padding: "20px",
          }}
        >
          <p>{successMessage}</p>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminAddMovieLayout;
