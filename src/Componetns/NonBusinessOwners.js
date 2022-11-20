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

export default function NonBusinessOwners() {
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
      field: "fname",
      headerName: "First Name",
      width: "200",
    },
    {
      field: "lname",
      headerName: "Last Name",
      width: "200",
    },
    {
      field: "Email",
      headerName: "Email",
      width: "250",
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
        <a href="/ViewNonBusinessOwners">
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
      fname: "John",
      lname: "Stark",
      Email: "John@gmail.com",
    },
    {
      id: 2,
      fname: "Stark",
      lname: "John",
      Email: "Stark@gmail.com",
    },
    {
      id: 3,
      fname: "Arya",
      lname: "Stark",
      Email: "Arya@gmail.com",
    },
    {
      id: 4,
      fname: "Jon",
      lname: "John",
      Email: "Jon@gmail.com",
    },
    {
      id: 5,
      fname: "Daenerys",
      lname: "Stark",
      Email: "Daenerys@gmail.com",
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
          <b>ALL NON-BUSINESS OWNERS</b>
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
