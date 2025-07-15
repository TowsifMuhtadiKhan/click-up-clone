import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { Add } from "@mui/icons-material"; // Import an icon (Add icon for this example)

type Props = {};

export const HomeLeftPanel = (props: Props) => {
  return (
    <Box width="100%" p={2}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Typography fontSize={"16px"}>Home</Typography>
        <Button
          size="small"
          variant="contained"
          startIcon={<Add />}
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
          Create
        </Button>
      </Box>
      <Box mt={2} display="flex" flexDirection="column" gap={1}>
        <Typography color="#949494ff" fontSize={"14px"}>
          {" "}
          Inbox
        </Typography>
        <Typography color="#949494ff" fontSize={"14px"}>
          {" "}
          My Tasks
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};
