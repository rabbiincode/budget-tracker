import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GavelIcon from "@mui/icons-material/Gavel";
import HistoryIcon from "@mui/icons-material/History";
import { Box, Stack, Typography } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const NavItem = ({ icon, label, active, onClick }: any) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={1.5}
    sx={{
      width: "100%",
      py: "0.75rem",
      px: "0.25rem",
      borderRadius: "0.5rem",
      cursor: "pointer",
      bgcolor: active ? "#F0F4FF" : "transparent",
      color: active ? "#5653FC" : "#4E5D69",
      fontWeight: active ? 600 : 500,
      "&:hover": { bgcolor: "#F7FAFC" },
    }}
    onClick={onClick}
  >
    <Stack direction="row" alignItems="center" spacing={1}>
      {icon}
      <Typography fontSize="0.85rem">{label}</Typography>
    </Stack>
  </Stack>
);

export const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  if (!isOpen) return null;

  const go = (path: string) => navigate(path);

  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        bgcolor: "#FFFFFF",
        borderRight: "1px solid #D9E5F2",
        px: "1.5rem",
        py: "1.65rem",
        mt: "6rem",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <Stack spacing={1} alignItems="flex-start">
        <NavItem
          icon={<HomeIcon fontSize="small" />}
          label="Home"
          active={pathname === "/"}
          onClick={() => go("/")}
        />

        <NavItem
          icon={<HistoryIcon fontSize="small" />}
          label="History"
          active={pathname === "/pages/history"}
          onClick={() => go("/pages/history")}
        />

        <NavItem
          icon={<AccountBalanceWalletIcon fontSize="small" />}
          label="Savings"
          active={pathname === "/pages/savings"}
          onClick={() => go("/pages/savings")}
        />

        <NavItem
          icon={<GavelIcon fontSize="small" />}
          label="Money Rules"
          active={pathname === "/pages/money-rules"}
          onClick={() => go("/pages/money-rules")}
        />
      </Stack>
    </Box>
  );
};
