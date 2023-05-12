// // left to right ltr

// import React from "react";
// import {
//   Sidebar,
//   Menu,
//   MenuItem,
//   useProSidebar,
//   SubMenu,
// } from "react-pro-sidebar";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// const Layout = () => {
//   const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
//     useProSidebar();
//   console.log(broken, "layout");
//   const toggle = () => {
//     toggleSidebar();

//     if (toggled) {
//       console.log(true);
//       collapseSidebar();
//     } else {
//       console.log(false);
//       collapseSidebar();
//     }
//   };
//   return (
//     <div style={{ display: "flex", height: "100%" }}>
//       <Sidebar
//         style={{ height: "100vh" }}
//         backgroundColor="rgb(0, 249, 249)"
//         transitionDuration={800}
//         breakPoint="sm"
//       >
//         <Menu>
//           <MenuItem
//             icon={<MenuOutlinedIcon />}
//             onClick={() => {
//               collapseSidebar();
//             }}
//             style={{ textAlign: "center" }}
//           >
//             {" "}
//             <h2>Admin</h2>
//           </MenuItem>
//           <MenuItem icon={<HomeOutlinedIcon />} active={true}>
//             Home
//           </MenuItem>
//           <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
//           <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>

//           <SubMenu
//             icon={<HomeOutlinedIcon />}
//             label="Home"
//             sx={{
//               backgroundColor: "rgb(0, 249, 249)",
//             }}
//             style={{ backgroundColor: "rgb(0, 249, 249)" }}
//           >
//             <MenuItem
//               style={{ backgroundColor: "rgb(0, 249, 249)" }}
//               icon={<PeopleOutlinedIcon />}
//             >
//               Item 1
//             </MenuItem>
//             <MenuItem
//               icon={<PeopleOutlinedIcon />}
//               style={{ backgroundColor: "rgb(0, 249, 249)" }}
//             >
//               Item 2
//             </MenuItem>
//             <MenuItem
//               icon={<PeopleOutlinedIcon />}
//               style={{ backgroundColor: "rgb(0, 249, 249)" }}
//             >
//               Item 3
//             </MenuItem>
//           </SubMenu>

//           <SubMenu
//             icon={<HomeOutlinedIcon />}
//             style={{ backgroundColor: "rgb(0, 249, 249)" }}
//             label="Home"
//           >
//             <MenuItem
//               style={{ backgroundColor: "rgb(0, 249, 249)" }}
//               icon={<PeopleOutlinedIcon />}
//             >
//               Item 1
//             </MenuItem>
//             <MenuItem
//               style={{ backgroundColor: "rgb(0, 249, 249)" }}
//               icon={<PeopleOutlinedIcon />}
//             >
//               Item 2
//             </MenuItem>
//             <MenuItem
//               style={{ backgroundColor: "rgb(0, 249, 249)" }}
//               icon={<PeopleOutlinedIcon />}
//             >
//               Item 3
//             </MenuItem>
//           </SubMenu>
//           <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
//           <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
//           <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
//         </Menu>
//       </Sidebar>
//       <main>
//         <h1
//           onClick={() => {
//             toggle();
//           }}
//           style={{ color: "white", marginLeft: "5rem" }}
//         >
//           React-Pro-Sidebar
//         </h1>
//         {toggled ? (
//           <h1 style={{ color: "white", marginLeft: "5rem" }}>Toggled</h1>
//         ) : (
//           <h1 style={{ color: "white", marginLeft: "5rem" }}>Not Toggled</h1>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Layout;

//************************************************************ */
// ***************** rtl

// import React from "react";
// import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// const Layout = () => {
//   const { collapseSidebar, rtl } = useProSidebar();

//   return (
//     <div
//       style={
//         ({ height: "100vh" }, { display: "flex", flexDirection: "row-reverse" })
//       }
//     >
//       {" "}
//       <Sidebar rtl={true} style={{ height: "100vh" }}>
//         {" "}
//         <Menu>
//           {" "}
//           <MenuItem
//             icon={<MenuOutlinedIcon />}
//             onClick={() => {
//               collapseSidebar();
//             }}
//             style={{ textAlign: "center" }}
//           >
//             {" "}
//             <h2>Admin</h2>
//           </MenuItem>
//           <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
//           <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
//           <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
//           <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
//           <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
//           <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
//         </Menu>
//       </Sidebar>
//     </div>
//   );
// };

// export default Layout;
// docs https://github.com/azouaoui-med/react-pro-sidebar
import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { useSidebarContext } from "./sidebarContext";

import { Link } from "react-router-dom";
import { tokens } from "../../../Theme";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerlink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-button:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-button.ps-active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu iconshape="square">
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              ) : sidebarRTL ? (
                <SwitchLeftOutlinedIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                />
              ) : (
                <SwitchRightOutlinedIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                />
              )
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  "& .avater-image": {
                    backgroundColor: colors.primary[500],
                  },
                }}
              >
                <img
                  className="avater-image"
                  alt="profile user"
                  width="100px"
                  height="100px"
                  src={"../../assets/logo192.png"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Harun Jeylan
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="../../Team/Team.jsx"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
