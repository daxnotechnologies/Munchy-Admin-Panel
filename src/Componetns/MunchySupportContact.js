import React, { useState, useEffect } from "react";
import "./css/styles.css";
import {
  Card,
  Button,
  CardContent,
  Typography,
  CardActions,
  TextField,
  FormControl,
  Box,
  Modal,
} from "@mui/material";
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

export default function Support() {
  const [Reply, setReply] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

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
                <h4 className="mb-4">REPLY</h4>

                <div>
                  <FormControl fullWidth size="small">
                    <TextField
                      multiline
                      rows={4}
                      className="mb-4"
                      id="outlined-basic"
                      label="Reply"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={Reply}
                      onChange={(e) => setReply(e.target.value)}
                    />
                  </FormControl>
                </div>

                <Button
                  fullWidth
                  className="mt-2 muibtn"
                  variant="contained"
                  color="primary"
                  size="medium"
                  style={{ backgroundColor: "#00B94A" }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Modal>
          <div>
            <Card className="my-4">
              <CardContent>
                <Typography gutterBottom variant="p" component="div">
                  Business ID: 112233
                </Typography>
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
                  onClick={handleOpen}
                >
                  Reply
                </Button>
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
            <Card className="my-4">
              <CardContent>
                <Typography gutterBottom variant="p" component="div">
                  Business ID: 112233
                </Typography>
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
                  onClick={handleOpen}
                >
                  Reply
                </Button>
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
            <Card className="my-4">
              <CardContent>
                <Typography gutterBottom variant="p" component="div">
                  Customer ID: 112233
                </Typography>
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
                  onClick={handleOpen}
                >
                  Reply
                </Button>
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
      </Card>
    </div>
  );
}
