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

export default function PaymentsFromAdmin() {
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
      field: "cname",
      headerName: "Hotel/Short-Let/Event Space Name",
      flex: 2,
    },

    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
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

          // onClick={}
        >
          Done
        </Button>
      </>
    );
  }

  const rows = [
    {
      id: 1,
      cname: "Caldia 23 Hotel",
      cost: "$200",
      status: "Paid",
    },
    {
      id: 2,
      cname: "Caldia 23 Hotel",
      cost: "$50",
      status: "Paid",
    },
    {
      id: 3,
      cname: "OwenFil Hotel",
      cost: "$50",
      status: "Paid",
    },
    {
      id: 4,
      cname: "Owen Event Spa",
      cost: "$200",
      status: "UnPaid",
    },
    {
      id: 5,
      cname: "OwenFil Hotel",
      cost: "$100",
      status: "UnPaid",
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
          <b>PAYMENTS FROM ADMIN</b>
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
