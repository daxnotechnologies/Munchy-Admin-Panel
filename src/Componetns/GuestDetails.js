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
} from "@mui/material";
import { headings, muiAbtn } from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
};

export default function GuestDetails() {
  // const [rows, setRows] = useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);

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
      field: "pname",
      headerName: "User Name",
      flex: 1,
    },
    {
      field: "cname",
      headerName: "Hotel/Short-Let/Event Space Name",
      flex: 1,
    },

    {
      field: "time",
      headerName: "Time",
      flex: 0.75,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,

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
          startIcon={<RemoveRedEyeIcon />}
          onClick={handleOpen}
        >
          View
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box mb={3} style={{ display: "flex", justifyContent: "end" }}>
              <CloseIcon
                onClick={handleClose}
                style={{ cursor: "pointer", color: "gray" }}
              />
            </Box>
            <div
              style={{ padding: 10, backgroundColor: "#205075", color: "#fff" }}
            >
              <h6>Caldia 23 Hotel</h6>
            </div>
            <div className="row my-3 mt-3" style={{ textAlign: "center" }}>
              <div className="col">
                <Card style={{ padding: 10 }}>
                  <h6>
                    <b>Wed, 9 Nov 2021</b>
                  </h6>
                  <p>Check In: 12:00 PM - 5:00 PM</p>
                </Card>
              </div>
              <div className="col">
                <Card style={{ padding: 10 }}>
                  <h6>
                    <b>Fri, 11 Nov 20211</b>
                  </h6>
                  <p>Check Out: 11:00 AM</p>
                </Card>
              </div>
            </div>
          </Box>
        </Modal>

        <Button
          variant="contained"
          color="primary"
          size="small"
          style={muiAbtn}
          startIcon={<RemoveRedEyeIcon />}

          // onClick={}
        >
          Export
        </Button>
      </>
    );
  }

  const rows = [
    {
      id: 1,
      pname: "John Doe",
      cname: "Caldia 23 Hotel",
      time: "11:30-01:30",
      status: "Check in",
    },
    {
      id: 2,
      pname: "Elizabeth",
      cname: "Caldia 23 Hotel",
      time: "11:30-01:30",
      status: "Check out",
    },
    {
      id: 3,
      pname: "John Doe",
      cname: "OwenFil Hotel",
      time: "11:30-01:30",
      status: "Check out",
    },
    {
      id: 4,
      pname: "John Doe",
      cname: "Owen Event Spa",
      time: "11:30-01:30",
      status: "Check in",
    },
    {
      id: 5,
      pname: "Hazel Clark",
      cname: "OwenFil Hotel",
      time: "11:30-01:30",
      status: "Check in",
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
          <b>GUEST DETAILS</b>
        </h1>
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
