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
    flex: 1,
  },

  {
    field: "Action",
    headerName: "Action",
    flex: 2,

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
            height: "20vh",
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
            <h6>
              <b>User ID: </b>112233
            </h6>
            <h6>Bar & Restaurant</h6>
            <h6>@eastwoodnyc</h6>
          </div>
        </div>
        <div className="row">
          <div className="mt-4 pt-4">
            <h6>
              <b>Headline:</b>
            </h6>
            <p>Headline Here</p>

            <h6>
              <b>Description:</b>
            </h6>
            <p>Description Here</p>
          </div>
          <div className="col">
            <div className="mt-4 ">
              <h6>
                <b>BUSINESS TYPE: </b> Restaurant
              </h6>
            </div>
            <div className="mt-3">
              <h6>
                <b>PRICE RANGE: </b> $$$
              </h6>
            </div>
            <div className="mt-3">
              <h6>
                <b>BUSINESS HOURS</b>
              </h6>
              <ul>
                <li>Monday: 10:00am - 10:00pm</li>
                <li>Tuesday: 10:00am - 10:00pm</li>
                <li>Wednesday: 10:00am - 10:00pm</li>
                <li>Thuruday: 10:00am - 10:00pm</li>
                <li>Friday: 10:00am - 10:00pm</li>
                <li>Saturday: 10:00am - 10:00pm</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="mt-4 pt-4">
              <h6>
                <b>LINKS</b>
              </h6>
              <ul>
                <li>
                  Website: <a href="">www.example.com</a>
                </li>
                <li>
                  Phone Number: <a href="tel">+91-7872378</a>
                </li>

                <li>
                  FaceBook: <a href="">www.example.com</a>
                </li>
                <li>
                  Instagram: <a href="">www.example.com</a>
                </li>
                <li>
                  Yelp: <a href="">www.example.com</a>
                </li>
                <li>
                  Menu: <a href="">www.example.com</a>
                </li>
                <li>
                  Resevations: <a href="">www.example.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="mt-4 pt-4">
              <h6>
                <b>BANKING DETAILS</b>
              </h6>
            </div>
          </div>
        </div>

        <div>
          <div className="row d-flex justify-content-center p-4">
            <div
              className="col p-3 m-3"
              style={{
                backgroundColor: "#00B94A",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <h5>Current Balance</h5>
              <h4>
                <b>$1200</b>
              </h4>
            </div>
            <div
              className="col p-3 m-3"
              style={{
                backgroundColor: "#00B94A",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <h5>Withdrawn</h5>
              <h4>
                <b>$200</b>
              </h4>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="py-2">
            <b>Following(120)</b>
          </h3>
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
        <div className="row" style={{ padding: 20 }}>
          <h2
            style={{
              textAlign: "center",
              marginTop: 25,
              marginBottom: 25,
              textTransform: "uppercase",
            }}
          >
            <b>ALL INSIDER TIERS</b>
          </h2>
          <div>
            <Card sx={{ maxWidth: "100%" }}>
              <CardContent>
                <div className="row">
                  <div className="col">
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ color: "#00B94A" }}
                    >
                      Tier Name
                    </Typography>
                  </div>
                  <div className="col">
                    <Typography
                      gutterBottom
                      variant="p"
                      component="div"
                      style={{ color: "#00B94A", textAlign: "right" }}
                    >
                      $20
                    </Typography>
                  </div>
                </div>
                <Typography variant="body2" color="text.secondary">
                  For two points, what bar hosts the toughest trivia in New York
                  City? Eastwood! Join us for a night of...
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
              <div>
                <h5
                  style={{
                    marginTop: 25,
                    marginBottom: 25,
                    textTransform: "uppercase",
                  }}
                >
                  <b>LIST OF MEMBERS</b>
                </h5>
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
              <div>
                <h5
                  style={{
                    marginTop: 25,
                    marginBottom: 25,
                    textTransform: "uppercase",
                  }}
                >
                  <b>ALL MESSAGES</b>
                </h5>
                <div>
                  <Card className="m-4">
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
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
                        For two points, what bar hosts the toughest trivia in
                        New York City? Eastwood! Join us for a night of banter
                        and fun as we crown our...
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
                  <Card className="m-4">
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
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
                        For two points, what bar hosts the toughest trivia in
                        New York City? Eastwood! Join us for a night of banter
                        and fun as we crown our...
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
                <div className="row">
                  <div className="col">
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ color: "#00B94A" }}
                    >
                      Today at 6pm
                    </Typography>
                  </div>
                  <div className="col">
                    <Typography
                      gutterBottom
                      variant="p"
                      component="div"
                      style={{ color: "#00B94A", textAlign: "right" }}
                    >
                      Deal
                    </Typography>
                  </div>
                </div>

                <Typography variant="body2" color="text.secondary">
                  For two points, what bar hosts the toughest trivia in New York
                  City? Eastwood! Join us for a night of...
                </Typography>
                <div className="row mt-3">
                  <div className="my-3">
                    <h6>Boosted for 1 Day in $20</h6>
                    <h6>
                      <b>Boosted For Tier: </b> Tier Name
                    </h6>
                  </div>

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
                <div className="row">
                  <div className="col">
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ color: "#00B94A" }}
                    >
                      Today at 6pm
                    </Typography>
                  </div>
                  <div className="col">
                    <Typography
                      gutterBottom
                      variant="p"
                      component="div"
                      style={{ color: "#00B94A", textAlign: "right" }}
                    >
                      Deal
                    </Typography>
                  </div>
                </div>
                <Typography variant="body2" color="text.secondary">
                  For two points, what bar hosts the toughest trivia in New York
                  City? Eastwood! Join us for a night of...
                </Typography>
                <div className="row mt-3">
                  <div className="my-3">
                    <h6>Boosted for 1 Day in $20</h6>
                    <h6>
                      <b>Boosted For Tier: </b> Tier Name
                    </h6>
                  </div>
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
                <div className="row">
                  <div className="col">
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ color: "#00B94A" }}
                    >
                      Today at 6pm
                    </Typography>
                  </div>
                  <div className="col">
                    <Typography
                      gutterBottom
                      variant="p"
                      component="div"
                      style={{ color: "#00B94A", textAlign: "right" }}
                    >
                      Deal
                    </Typography>
                  </div>
                </div>
                <Typography variant="body2" color="text.secondary">
                  For two points, what bar hosts the toughest trivia in New York
                  City? Eastwood! Join us for a night of...
                </Typography>
                <div className="row mt-3">
                  <div className="my-3">
                    <h6>Boosted for 1 Day in $20</h6>
                    <h6>
                      <b>Boosted For Tier: </b> Tier Name
                    </h6>
                  </div>
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
