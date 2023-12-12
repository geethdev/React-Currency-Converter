import { Button, Container, Grid, Typography } from "@mui/material";
import InputAmout from "./components/InputAmout";
import SelectCountry from "./components/SelectCountry";
import SwitchCurrency from "./components/SwitchCurrency";

function App() {
  return (
    <Container maxWidth="md" sx={{ background: "#fdfdfd" }}>
      <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
        Stay Ahead With Accurate Conversion
      </Typography>
      <Grid container spacing={2}>
        <InputAmout />
        <SelectCountry />
        <SwitchCurrency />
        <SelectCountry />
      </Grid>
    </Container>
  );
}

export default App;
