import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  Box,
  Menu,
  Stack,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";

export const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        height: "6rem",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Stack
        direction="row"
        spacing={5}
        sx={{ minWidth: "250px", p: "2rem", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Box
            component="img"
            src="/assets/logo.png"
            alt="logo"
            sx={{ width: "2.5rem", height: "100%" }}
          />

          <Typography variant="h5" sx={{ whiteSpace: "nowrap" }}>
            Budgetly
          </Typography>
        </Box>

        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Stack>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          px: "2rem",
          borderBottom: "1px solid #D9E5F2",
          borderLeft: "1px solid #D9E5F2",
          alignItems: "center",
        }}
      >
        <Typography />

        <Stack direction="row" spacing={4} alignItems="center">
          <Stack direction="row" spacing={2}>
            <IconButton>
              <AppsIcon sx={{ color: "#009FE3" }} />
            </IconButton>

            <IconButton>
              <SettingsIcon />
            </IconButton>

            <IconButton sx={{ position: "relative" }}>
              <NotificationsIcon />
              <Box
                component="span"
                sx={{
                  position: "absolute",
                  right: 10,
                  top: 8,
                  width: 8,
                  height: 8,
                  bgcolor: "red",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{ cursor: "pointer" }}
            onClick={handleOpen}
          >
            <Box>
              <Typography fontSize="0.85rem" fontWeight={600}>
                John Doe
              </Typography>

              <Typography fontSize="0.75rem" color="#718096">
                john@tracker.com
              </Typography>
            </Box>

            <KeyboardArrowDownIcon />
          </Stack>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem
              onClick={() => {
                navigate("/profile");
                handleClose();
              }}
            >
              Profile
            </MenuItem>

            <MenuItem
              onClick={() => {
                navigate("/settings");
                handleClose();
              }}
            >
              Settings
            </MenuItem>

            <MenuItem
              onClick={() => {
                navigate("/settings");
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Stack>
      </Box>
    </Box>
  );
};
