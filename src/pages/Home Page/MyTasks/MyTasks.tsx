import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

type Props = {};

export const MyTasks = (props: Props) => {
  return (
    <Box>
      <Box
        bgcolor={"#111111"}
        px={2}
        py={1}
        borderBottom={1}
        borderColor={"#4b4b4bff"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontWeight={700}>MyTasks</Typography>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Button
              size="small"
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                color: "white",
                backgroundColor: "#3b5CDE",
                "&:hover": {
                  backgroundColor: "lightgreen",
                },
              }}
            >
              Manage Cards
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <SettingsIcon sx={{ color: "#949494ff" }} />
          </Box>
        </Box>
      </Box>

      {/* Scrollable Grid Container */}
      <Box sx={{ maxHeight: "900px", overflowY: "auto", mb: 15, mt: 2 }}>
        <Grid container spacing={2} px={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              bgcolor="#111111"
              minHeight="350px"
              borderRadius={2}
              border={1}
              borderColor="#4b4b4bff"
              p={2}
            >
              <Typography variant="h6">Recents</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              bgcolor="#111111"
              minHeight="350px"
              borderRadius={2}
              border={1}
              borderColor="#4b4b4bff"
              p={2}
            >
              <Typography variant="h6">Agenda</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              bgcolor="#111111"
              minHeight="350px"
              borderRadius={2}
              border={1}
              borderColor="#4b4b4bff"
              p={2}
            >
              <Typography variant="h6">My Work</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              bgcolor="#111111"
              minHeight="350px"
              borderRadius={2}
              border={1}
              borderColor="#4b4b4bff"
              p={2}
            >
              <Typography variant="h6">Assign to me</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              bgcolor="#111111"
              minHeight="350px"
              borderRadius={2}
              border={1}
              borderColor="#4b4b4bff"
              p={2}
            >
              <Typography variant="h6">Item 5</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              bgcolor="#111111"
              minHeight="350px"
              borderRadius={2}
              border={1}
              borderColor="#4b4b4bff"
              p={2}
            >
              <Typography variant="h6">Item 6</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
