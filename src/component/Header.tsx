import {
  Avatar,
  Box,
  IconButton,
  Collapse,
  Typography,
  TextField,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AppsIcon from "@mui/icons-material/Apps";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleAvatarClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 20,
          backgroundColor: "#111",
          color: "white",
          zIndex: 10,
        }}
        px={1}
        py={2}
      >
        <Box display={"flex"} alignItems="center" width={"100%"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Left side: Avatar and workspace */}
            <Box display={"flex"} alignItems="center">
              <Box
                bgcolor={"#232323"}
                px={0.1}
                display={"flex"}
                alignItems="center"
                flexDirection={"row"}
                borderRadius={2}
              >
                <Avatar
                  sx={{
                    bgcolor: "#3b5CDE",
                    fontSize: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 1,
                    marginLeft: 1,
                    width: 20,
                    height: 20,
                    cursor: "pointer", // Make the avatar clickable
                  }}
                  onClick={handleAvatarClick} // Handle the Avatar click
                >
                  T
                </Avatar>
                <Typography>Towsif Khan's Workspace</Typography>
                <IconButton onClick={handleAvatarClick}>
                  <ExpandMoreIcon sx={{ fontSize: 20, color: "#D6D6D6" }} />
                </IconButton>
              </Box>
              <Typography mx={1}>|</Typography>
              <DateRangeIcon sx={{ fontSize: 20, color: "#D6D6D6" }} />
            </Box>

            {/* Center: Search Box */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1, // Make the search box take as much space as possible
                mx: 2, // Add spacing on the sides
              }}
            >
              <TextField
                sx={{
                  backgroundColor: "#232323",
                  width: "100%",
                  maxWidth: 400, // Limit the size of the search box
                  borderRadius: 1,
                  input: { color: "#D6D6D6" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#444",
                    },
                    "&:hover fieldset": {
                      borderColor: "#888",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3b5CDE",
                    },
                  },
                }}
                variant="outlined"
                placeholder="Search..."
                size="small"
              />
            </Box>

            {/* Right side: Part 1 and Apps */}
            <Box display={"flex"} alignItems="center">
              <AppsIcon sx={{ fontSize: 25, color: "#D6D6D6" }} />
              <Avatar
                sx={{
                  bgcolor: "#3b5CDE",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 1,
                  marginLeft: 1,
                  width: 30,
                  height: 30,
                  cursor: "pointer", // Make the avatar clickable
                }}
              >
                T
              </Avatar>
            </Box>
          </Box>
        </Box>

        {/* Dropdown menu */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box
            sx={{
              bgcolor: "#333",
              padding: "1rem",
              color: "white",
              borderRadius: 1,
              marginTop: 1,
              display: open ? "block" : "none",
            }}
          >
            <Box>Profile Settings</Box>
            <Box>Log Out</Box>
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default Header;
