import {
  Card,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  TextField,
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
    flex: 2,
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
      <IconButton aria-label="delete" style={muiAbtn}>
        <DeleteIcon />
      </IconButton>
    </>
  );
}
const hrows = [];
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
const frows = [
  {
    id: 1,
    name: "Eastwood",
  },
  {
    id: 2,
    name: "Eastwood",
  },
  {
    id: 3,
    name: "Eastwood",
  },
  {
    id: 4,
    name: "Eastwood",
  },
  {
    id: 5,
    name: "Eastwood",
  },
];

export default function ViewNonBusinessOwners() {
  const [Rows, setRows] = React.useState([]);
  return (
    <div
      style={{
        width: "100%",
        padding: 40,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card style={{ padding: 30, borderRadius: 10 }}>
        <div>
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: 20,
            }}
          >
            <h3>
              <b>John Doe</b>
            </h3>
            <h6>
              <b>Account Handle: </b>@Johndoe
            </h6>
            <h6>
              <b>Email: </b>John@gmail.com
            </h6>
            <h6>
              <b>Phone No: </b>(999) 000-11111
            </h6>
            <p className="mt-4">
              <b>Account created on: </b> 22/11/22
            </p>
            <p className="mt-4">
              <b>Business Account: </b>{" "}
              <a href="" style={{ color: "#00B94A" }}>
                Business ID: 112233
              </a>
            </p>
          </div>
        </div>
        <div className="my-4">
          <h4 className="py-3">
            <b>Credit Card Information</b>
          </h4>
          <TextField
            className="mb-4"
            fullWidth
            id="outlined-read-only-input"
            label="Card Number"
            defaultValue="0000 0000 0000 0000"
            InputProps={{
              readOnly: true,
            }}
          />
          <div className="row">
            <div className="col">
              <TextField
                className="mb-4"
                fullWidth
                id="outlined-read-only-input"
                label="Expiry Date"
                defaultValue="05/22"
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div className="col">
              <TextField
                className="mb-4"
                fullWidth
                id="outlined-read-only-input"
                label="Security Code"
                defaultValue="344"
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
          </div>
          <TextField
            className="mb-4"
            fullWidth
            id="outlined-read-only-input"
            label="Name on Card"
            defaultValue="John Doe"
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <h3 className="py-2">
            <b>Payment History</b>
          </h3>
          <DataGrid
            style={{ height: "45vh", width: "100%" }}
            columns={columns}
            rows={hrows}
            pageSize={4}
            rowsPerPageOptions={[4]}
            disableSelectionOnClick
          />
        </div>
        <div className="row my-4">
          <div className="col">
            <h3 className="py-2">
              <b>Following(120)</b>
            </h3>

            <DataGrid
              style={{ height: "45vh", width: "100%" }}
              columns={columns}
              rows={frows}
              // getRowId={(Rows) => Rows._id}
              pageSize={4}
              rowsPerPageOptions={[4]}
              disableSelectionOnClick
            />
          </div>
          <div className="col">
            <h3 className="py-2">
              <b>Friends(12)</b>
            </h3>
            <DataGrid
              style={{ height: "45vh", width: "100%" }}
              columns={columns}
              rows={rows}
              // getRowId={(Rows) => Rows._id}
              pageSize={4}
              rowsPerPageOptions={[4]}
              disableSelectionOnClick
            />
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
            <b>INSIDER SUBSCRIPTIONS</b>
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
                  Remove
                </Button>
              </CardActions>
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
                  Remove
                </Button>
              </CardActions>
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
                  Remove
                </Button>
              </CardActions>
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
