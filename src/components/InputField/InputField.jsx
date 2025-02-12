import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ label, type, onchange, Required }) {
  return (
    <Box
      component="form"
      sx={{ width: 500, maxWidth: "100%", marginBottom: "10px" }}
      noValidate
      autoComplete="off"
      //   border="2px solid red"
    >
      <TextField
        required={Required}
        id="fullWidth"
        label={label}
        variant="filled"
        type={type}
        fullWidth
        color="black"
        onChange={onchange}
      />
    </Box>
  );
}
