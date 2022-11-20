import {
  Card,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import "./css/styles.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Hotel from "./Hotel.png";
import { muiAbtn } from "./style";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { field: "id", headerName: "ID", width: "50" },
  {
    field: "name",
    headerName: "Name",
    width: "150",
  },

  {
    field: "Action",
    headerName: "Action",
    width: "80",

    editable: false,
    renderCell: ActionButton,
  },
];

function ActionButton() {
  return (
    <>
      <IconButton aria-label="delete" style={muiAbtn}>
        <DeleteIcon />
      </IconButton>
    </>
  );
}

const rows = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Stark",
  },
  {
    id: 3,
    name: "Arya",
  },
  {
    id: 4,
    name: "Jon",
  },
  {
    id: 5,
    name: "Daenerys",
  },
];

export default function ViewBusinessOwners() {
  return (
    <div
      style={{
        width: "100%",
        padding: 40,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card style={{ padding: 30, borderRadius: 10 }}>
        <div
          style={{
            backgroundImage: `url(${Hotel})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "30vh",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              color: "#fff",
              padding: 20,
            }}
          >
            <h3>
              <b>Eastwood</b>
            </h3>
            <h6>Bar & Restaurant</h6>
            <h6>@eastwoodnyc</h6>
          </div>
        </div>
        <div className="row" style={{ padding: 20 }}>
          <h2
            style={{
              textAlign: "center",
              marginTop: 25,
              marginBottom: 25,
              textTransform: "uppercase",
            }}
          >
            <b>ALL POSTS</b>
          </h2>
          <div className="col">
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <b>Trivia Night w/Zogsports</b>
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ color: "#00B94A" }}
                >
                  Today at 6pm
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  For two points, what bar hosts the toughest trivia in New York
                  City? Eastwood! Join us for a night of...
                </Typography>
                <div className="row mt-3">
                  <div className="col">
                    <Typography style={{ textAlign: "center", marginTop: "5" }}>
                      <h5>
                        <b>2200</b>
                      </h5>
                      <h6>Views</h6>
                    </Typography>
                  </div>
                  <div className="col">
                    <Typography style={{ textAlign: "center", marginTop: "5" }}>
                      <h5>
                        <b>133</b>
                      </h5>
                      <h6>Opens</h6>
                    </Typography>
                  </div>
                  <div className="col">
                    <Typography style={{ textAlign: "center", marginTop: "5" }}>
                      <h5>
                        <b>19</b>
                      </h5>
                      <h6>Shares</h6>
                    </Typography>
                  </div>
                </div>
              </CardContent>
              <CardActions className="mb-2 ml-2">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#00B94A" }}
                  size="small"
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#00B94A" }}
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
              <div>
                <DataGrid
                  style={{ height: "30vh", width: "100%" }}
                  columns={columns}
                  rows={rows}
                  // getRowId={(Rows) => Rows._id}
                  pageSize={2}
                  rowsPerPageOptions={[2]}
                  disableSelectionOnClick
                />
              </div>
            </Card>
          </div>
          <div className="col">
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <b>Trivia Night w/Zogsports</b>
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ color: "#00B94A" }}
                >
                  Today at 6pm
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  For two points, what bar hosts the toughest trivia in New York
                  City? Eastwood! Join us for a night of...
                </Typography>
                <div className="row mt-3">
                  <div className="col">
                    <Typography style={{ textAlign: "center", marginTop: "5" }}>
                      <h5>
                        <b>2200</b>
                      </h5>
                      <h6>Views</h6>
                    </Typography>
                  </div>
                  <div className="col">
                    <Typography style={{ textAlign: "center", marginTop: "5" }}>
                      <h5>
                        <b>133</b>
                      </h5>
                      <h6>Opens</h6>
                    </Typography>
                  </div>
                  <div className="col">
                    <Typography style={{ textAlign: "center", marginTop: "5" }}>
                      <h5>
                        <b>19</b>
                      </h5>
                      <h6>Shares</h6>
                    </Typography>
                  </div>
                </div>
              </CardContent>
              <CardActions className="mb-2 ml-2">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#00B94A" }}
                  size="small"
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#00B94A" }}
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
              <div>
                <DataGrid
                  style={{ height: "30vh", width: "100%" }}
                  columns={columns}
                  rows={rows}
                  // getRowId={(Rows) => Rows._id}
                  pageSize={2}
                  rowsPerPageOptions={[2]}
                  disableSelectionOnClick
                />
              </div>
            </Card>
          </div>
          <div className="col">
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <b>Trivia Night w/Zogsports</b>
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ color: "#00B94A" }}
                >
                  Today at 6pm
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  For two points, what bar hosts the toughest trivia in New York
                  City? Eastwood! Join us for a night of...
                </Typography>
                <div className="row mt-3">
                  <div className="col">
                    <Typography style={{ textAlign: "center", marginTop: "5" }}>
                      <h5>
                        <b>2200</b>
                      </h5>
                      <h6>Views</h6>
                    </Typography>
                  </div>
                  <div className="col">
                    <Typography style={{ textAlign: "center", marginTop: "5" }}>
                      <h5>
                        <b>133</b>
                      </h5>
                      <h6>Opens</h6>
                    </Typography>
                  </div>
                  <div className="col">
                    <Typography style={{ textAlign: "center", marginTop: "5" }}>
                      <h5>
                        <b>19</b>
                      </h5>
                      <h6>Shares</h6>
                    </Typography>
                  </div>
                </div>
              </CardContent>
              <CardActions className="mb-2 ml-2">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#00B94A" }}
                  size="small"
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#00B94A" }}
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
              <div>
                <DataGrid
                  style={{ height: "30vh", width: "100%" }}
                  columns={columns}
                  rows={rows}
                  // getRowId={(Rows) => Rows._id}
                  pageSize={2}
                  rowsPerPageOptions={[2]}
                  disableSelectionOnClick
                />
              </div>
            </Card>
          </div>
        </div>
        <div>
          <h2
            style={{
              textAlign: "center",
              marginTop: 25,
              marginBottom: 25,
              textTransform: "uppercase",
            }}
          >
            <b>ALL MESSAGES</b>
          </h2>
          <div>
            <Card className="my-4">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <b>Example Message Title</b>
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ color: "#00B94A" }}
                >
                  Oct 14 7:22pm
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  For two points, what bar hosts the toughest trivia in New York
                  City? Eastwood! Join us for a night of banter and fun as we
                  crown our...
                </Typography>
              </CardContent>
              <CardActions className="mb-2 ml-2">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#00B94A" }}
                  size="small"
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#00B94A" }}
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
            <Card className="my-4">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <b>Example Message Title</b>
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ color: "#00B94A" }}
                >
                  Oct 14 7:22pm
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  For two points, what bar hosts the toughest trivia in New York
                  City? Eastwood! Join us for a night of banter and fun as we
                  crown our...
                </Typography>
              </CardContent>
              <CardActions className="mb-2 ml-2">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#00B94A" }}
                  size="small"
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#00B94A" }}
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
