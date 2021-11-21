import Header from "./components/Header"
import TempChart from "./components/Charts/TempChart";
import MoistureChart from "./components/Charts/MoistureChart";
import HumidChart from "./components/Charts/HumidityChart";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function App() {
  return (
  <Box sx={{flexGrow: 1}}>
    <Header />
    <Grid container spacing ={2}>
      <Grid item xs={5}>
          <TempChart />
      </Grid>
      <Grid item xs={5}>
        <MoistureChart />
      </Grid>
      <Grid item xs={5}>
        <HumidChart />
      </Grid>
    </Grid>
  </Box>
  );
}

export default App;
