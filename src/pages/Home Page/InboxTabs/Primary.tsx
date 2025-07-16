import { Box, Divider, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

type Props = {};

export const Primary = (props: Props) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <MailIcon sx={{ fontSize: 100, color: "#3b5CDE", mt: 10 }} />
      <Typography fontSize={"16px"} mt={3}>
        Inbox Zero
      </Typography>
      <Typography color="#949494ff" fontSize={"14px"} mt={1}>
        Congratulations! You cleared your important notifications
      </Typography>
    </Box>
  );
};
