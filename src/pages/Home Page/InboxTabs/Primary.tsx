import { Box, Divider, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

type Props = {};

export const Primary = (props: Props) => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        mb={20}
      >
        <MailIcon sx={{ fontSize: 100, color: "#3b5CDE", mt: 10 }} />
        <Typography fontSize={"16px"} mt={3}>
          Inbox Zero
        </Typography>
        <Typography color="#949494ff" fontSize={"14px"} mt={1}>
          Congratulations! You cleared your important notifications
        </Typography>
      </Box>

      {/* Divider with a Box in the middle */}
      <Divider sx={{ my: 2, position: "relative", color: "#949494ff" }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",

            borderRadius: "4px",
            border: "1px solid #949494ff",
            backgroundColor: "#111111",
          }}
          px={2}
          py={0.5}
        >
          <Typography color="#949494ff">Motivational Quote</Typography>
        </Box>
      </Divider>
    </>
  );
};
