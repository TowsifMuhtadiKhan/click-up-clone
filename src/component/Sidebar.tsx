import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Home, Info, Settings } from "@mui/icons-material";
import { Typography } from "@mui/material";

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/", icon: <Home /> },
    { label: "About", path: "/about", icon: <Info /> },
    { label: "Settings", path: "/settings", icon: <Settings /> },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: 38,
        left: 12,
        width: 30,
        height: "100%",
        backgroundColor: "#1A2242",
        color: "white",
        padding: "1rem",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        {navItems.map((item) => (
          <li
            key={item.path}
            style={{
              marginBottom: "1rem",
              cursor: "pointer",
              textAlign: "center",
              padding: "0.5rem",
              borderRadius: "4px",
              transition: "background 0.2s",
            }}
            onClick={() => navigate(item.path)}
            onMouseOver={(e) => (e.currentTarget.style.background = "#333")}
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <div>{item.icon}</div>
            <Typography fontSize={"12px"}>{item.label}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Sidebar;
