import React, { useState } from "react";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "./logo.png";
import {
  Card,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { navlink } from "./style";
import { Box } from "@mui/system";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [openUser, setOpenUser] = React.useState(false);

  const handleClickUser = () => {
    setOpenUser(!openUser);
  };

  return (
    <>
      <div className="flex flex-col  items-center md:items-start font-Poppins ">
        <Box sx={{ backgroundColor: "#fff", boxShadow: 3 }}>
          <div className="  w-[250px] ">
            <div className="ml-5  mt-10 mb-5 text-2xl mb-20">
              <img src={logo} width="150px" style={{ marginBottom: 25 }} />
            </div>

            <ul className=" my-2 text-xl font-small">
              <div className="flex flex-col">
                <ListItemButton>
                  <a href="/NonBusinessOwners" style={navlink}>
                    <li
                      style={{
                        fontSize: 17,
                        marginBottom: 5,
                      }}
                    >
                      <PersonIcon className="mr-2" /> Non-Business Owners{" "}
                    </li>
                  </a>
                </ListItemButton>
                <ListItemButton>
                  <a href="/BusinessOwners" style={navlink}>
                    <li
                      style={{
                        fontSize: 17,
                        marginBottom: 5,
                      }}
                    >
                      <PersonIcon className="mr-2" /> Business Owners{" "}
                    </li>
                  </a>
                </ListItemButton>
                <ListItemButton>
                  <a href="/Support" style={navlink}>
                    <li
                      style={{
                        fontSize: 17,
                        marginBottom: 5,
                      }}
                    >
                      <MessageIcon className="mr-2" /> Support{" "}
                    </li>
                  </a>
                </ListItemButton>

                <ListItemButton>
                  <a href="/" style={navlink}>
                    <li
                      style={{
                        fontSize: 17,
                      }}
                    >
                      <LogoutIcon className="mr-2" />
                      Logout
                    </li>
                  </a>
                </ListItemButton>
              </div>
            </ul>
          </div>
        </Box>
      </div>
    </>
  );
}
