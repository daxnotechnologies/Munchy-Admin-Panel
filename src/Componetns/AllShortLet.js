import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  Card,
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
} from "@mui/material";
import { headings, muiAbtn } from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function AllShortLet() {
  // const [rows, setRows] = useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: "60" },
    {
      field: "name",
      headerName: "First Name",
      width: "200",
    },
    {
      field: "address",
      headerName: "Address",
      width: "250",
    },
    {
      field: "owner",
      headerName: "Owner",
      width: "150",
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
          startIcon={<RemoveRedEyeIcon />}

          // onClick={}
        >
          View
        </Button>
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
      owner: "Stark",
    },
    {
      id: 3,
      name: "OwenFil Hotel",
      address: "1034 Walnut Street",
      owner: "Stark",
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
          <b>ALL SHORT-LET</b>
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
