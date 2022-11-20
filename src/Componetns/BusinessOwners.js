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
} from "@mui/material";
import { headings, muiAbtn } from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
};
export default function BusinessOwners() {
  // const [rows, setRows] = useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: "60" },
    {
      field: "name",
      headerName: "Business Name",
      width: "200",
    },
    {
      field: "businesshandle",
      headerName: "Business Handle",
      width: "200",
    },
    {
      field: "address",
      headerName: "Business Address",
      width: "300",
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
        <a href="/ViewBusinessOwners">
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={muiAbtn}
            startIcon={<RemoveRedEyeIcon />}

            // onClick={}
          >
            View
          </Button>
        </a>
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
            {"Are you sure to delete?"}
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
      name: "Eastwood",
      businesshandle: "Bar & Restaurant",
      address: "200 Clinton Street, NewYork",
    },
    {
      id: 2,
      name: "Eastwood",
      businesshandle: "Bar & Restaurant",
      address: "200 Clinton Street, NewYork",
    },
    {
      id: 3,
      name: "Eastwood",
      businesshandle: "Bar & Restaurant",
      address: "200 Clinton Street, NewYork",
    },
    {
      id: 4,
      name: "Eastwood",
      businesshandle: "Bar & Restaurant",
      address: "200 Clinton Street, NewYork",
    },
    {
      id: 5,
      name: "Eastwood",
      businesshandle: "Bar & Restaurant",
      address: "200 Clinton Street, NewYork",
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
          <b>ALL BUSINESS OWNERS</b>
        </h1>
        {/* <div className="d-flex justify-content-end mb-4">
          <Button
            variant="contained"
            color="primary"
            size="medium"
            style={muiAbtn}
            onClick={handleOpen}
            startIcon={<AddIcon />}
          >
            Add New Owner
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form>
                <Box mb={3} style={{ display: "flex", justifyContent: "end" }}>
                  <CloseIcon
                    onClick={handleClose}
                    style={{ cursor: "pointer", color: "gray" }}
                  />
                </Box>
                <h4 className="mb-4">ADD NEW VENDOR</h4>

                <div>
                  <FormControl fullWidth size="small">
                    <TextField
                      className="mb-4"
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                </div>
                <div className="col">
                  <FormControl fullWidth size="small">
                    <TextField
                      className="mb-4"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                </div>
                <Button
                  fullWidth
                  className="mt-2 muibtn"
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ backgroundColor: "#205075", color: "#FEC25D" }}
                >
                  <AddIcon style={{ marginRight: 10 }} />
                  Submit
                </Button>
              </form>
            </Box>
          </Modal>
        </div> */}
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
