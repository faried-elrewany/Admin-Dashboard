import { React } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="column">
      <h1>بسم الله الرحمن الرحيم</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
