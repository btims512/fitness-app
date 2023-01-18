import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "80px", height: "80px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "20px", xs: "18px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
      fontFamily="cursive"
      marginTop="20px"
      marginLeft="10px"
    >
      Made for David
    </Typography>
  </Box>
);

export default Footer;
