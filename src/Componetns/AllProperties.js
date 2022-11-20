import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  Card,
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  Modal,
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Checkbox,
} from "@mui/material";
import { headings, muiAbtn } from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
};
export default function AllProperties() {
  // const [rows, setRows] = useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Location, setLocation] = useState("");
  const [Description, setDescription] = useState("");
  const [Type, setType] = useState("");
  const [FacilityName, setFacilityName] = useState("");
  const [Hours, setHours] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: "60" },
    {
      field: "owner",
      headerName: "Owner",
      width: "180",
    },
    {
      field: "name",
      headerName: "First Name",
      width: "180",
    },
    {
      field: "address",
      headerName: "Address",
      width: "280",
    },
    {
      field: "markVIP",
      headerName: "Mark as VIP",
      width: "130",
      renderCell: () => {
        return (
          <>
            <IconButton>
              <Checkbox {...label} />
            </IconButton>
          </>
        );
      },
    },

    {
      field: "Action",
      headerName: "Action",
      width: "350",

      editable: false,
      renderCell: ActionButton,
    },
  ];

  function ActionButton() {
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={muiAbtn}
          startIcon={<EditIcon />}

          // onClick={}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={muiAbtn}
          onClick={handleClickOpen}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure to delete the program?"}
          </DialogTitle>

          <DialogActions>
            <Button
            // onClick={}
            >
              Yes
            </Button>
            <Button onClick={handleCloseDialog} autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  const rows = [
    {
      id: 1,
      name: "Caldia 23 Hotel",
      address: "1034 Walnut Street",
      owner: "Stark",
    },
    {
      id: 2,
      name: "Caldia 23 Hotel",
      address: "1034 Walnut Street",
      owner: "Admin",
    },
    {
      id: 3,
      name: "OwenFil Hotel",
      address: "1034 Walnut Street",
      owner: "Admin",
    },
    {
      id: 4,
      name: "Caldia 23 Hotel",
      address: "1034 Walnut Street",
      owner: "Stark",
    },
    {
      id: 5,
      name: "OwenFil Hotel",
      address: "1034 Walnut Street",
      owner: "Stark",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        padding: 40,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card style={{ padding: 30, borderRadius: 10 }}>
        <h1 className="mb-4 py-4" style={headings}>
          <b>ALL PROPERTIES</b>
        </h1>
        <div className="d-flex justify-content-end mb-4">
          <Button
            variant="contained"
            color="primary"
            size="medium"
            style={muiAbtn}
            onClick={handleOpen}
            startIcon={<AddIcon />}
          >
            Add New Property
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form>
                <Box style={{ display: "flex", justifyContent: "end" }}>
                  <CloseIcon
                    onClick={handleClose}
                    style={{ cursor: "pointer", color: "gray" }}
                  />
                </Box>
                <h4 className="mb-4">ADD NEW PROPERTY</h4>
                <div>
                  <FormControl fullWidth size="small" className="mb-4">
                    <InputLabel id="demo-simple-select-label">
                      Property Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={Type}
                      label="Property Type"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <MenuItem value={"Hotel"}>Hotel</MenuItem>
                      <MenuItem value={"Event Space"}>Event Space</MenuItem>
                      <MenuItem value={"Short-Let"}>Short-Let</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="row">
                  <div className="col">
                    <FormControl fullWidth size="small">
                      <TextField
                        className="mb-4"
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                  </div>
                  <div className="col">
                    <FormControl fullWidth size="small">
                      <TextField
                        className="mb-4"
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={Price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </FormControl>
                  </div>
                  <div className="col">
                    <FormControl fullWidth size="small">
                      <TextField
                        className="mb-4"
                        id="outlined-basic"
                        label="Location"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={Location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </FormControl>
                  </div>
                </div>

                <div>
                  <FormControl fullWidth size="small">
                    <TextField
                      multiline
                      rows={3}
                      className="mb-4"
                      id="outlined-basic"
                      label="Description"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={Description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth size="small">
                    <TextField
                      className="mb-4"
                      id="outlined-basic"
                      label="Hours"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={Hours}
                      onChange={(e) => setHours(e.target.value)}
                    />
                  </FormControl>
                </div>
                <div className="row">
                  <div className="col-5">
                    <FormControl fullWidth size="small">
                      <TextField
                        className="mb-4"
                        id="outlined-basic"
                        label="Facility Name"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={FacilityName}
                        onChange={(e) => setFacilityName(e.target.value)}
                      />
                    </FormControl>
                  </div>
                  <div className="col-4">
                    <Button
                      fullWidth
                      variant="outlined"
                      component="label"
                      style={{ borderColor: "#205075", color: "#205075" }}
                    >
                      Upload Icon
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="medium"
                      style={{ backgroundColor: "#205075", color: "#FEC25D" }}
                    >
                      <AddIcon style={{ marginRight: 10 }} />
                      Add
                    </Button>
                  </div>
                </div>
                <div class="mb-4">
                  <label class="form-label" for="customFile">
                    <b>Upload Images</b>
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="customFile"
                    // onChange={}
                  />
                </div>
                <Button
                  fullWidth
                  className="mt-2 muibtn"
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ backgroundColor: "#205075", color: "#FEC25D" }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Modal>
        </div>
        <div>
          <DataGrid
            style={{ height: "65vh", width: "100%" }}
            columns={columns}
            rows={rows}
            // getRowId={(Rows) => Rows._id}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
      </Card>
    </div>
  );
}
