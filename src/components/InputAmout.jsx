import { Button, Container, Grid, TextField, Typography } from "@mui/material";
const InputAmout = () => {
  return (
    <Grid item>
      <TextField
        label="Amount"
        fullWidth
        InputProps={{
          type: "number",
        }}
      />
    </Grid>
  );
};

export default InputAmout;
