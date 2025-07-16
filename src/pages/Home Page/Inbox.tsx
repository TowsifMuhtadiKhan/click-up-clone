import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  Inbox as InboxIcon,
  Mail as MailIcon,
  Done as DoneIcon,
} from "@mui/icons-material";
import { Primary } from "./InboxTabs/Primary";

type Props = {};

export const Inbox = (props: Props) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleDocTabChange = (v: number) => {
    setTabIndex(v);
  };

  return (
    <Box p={2}>
      <Typography fontWeight={"bold"}> Inbox</Typography>
      <Box borderBottom={1} borderColor={"#4b4b4bff"}>
        <Tabs
          value={tabIndex}
          onChange={(_, v) => handleDocTabChange(v)}
          textColor="inherit"
          sx={{
            minHeight: "30px",
          }}
        >
          <Tab
            label="Primary"
            icon={<InboxIcon />}
            iconPosition="start"
            sx={{
              width: 220,
              height: 50,
              borderRight: "1px solid #4b4b4b",
              minHeight: 0,
            }}
          />
          <Tab
            label="Other"
            icon={<MailIcon />}
            iconPosition="start"
            sx={{
              width: 220,
              height: 50,
              borderRight: "1px solid #4b4b4b",
              minHeight: 0,
            }}
          />
          <Tab
            label="Cleared"
            icon={<DoneIcon />}
            iconPosition="start"
            sx={{
              width: 220,
              height: 50,
              minHeight: 0,
            }}
          />
        </Tabs>
      </Box>
      {tabIndex === 0 && <Primary />}
    </Box>
  );
};
