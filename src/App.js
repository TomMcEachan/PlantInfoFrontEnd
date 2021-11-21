import Header from "./components/Header"
import TempChart from "./components/Charts/TempChart";
import MoistureChart from "./components/Charts/MoistureChart";
import HumidChart from "./components/Charts/HumidityChart";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ChartContainer } from "./components/Container";

function App() {
  return (
  <Box sx={{flexGrow: 1}}>
    <Header />
    <ChartContainer backgroundColor="#f9f9f9">
      <Grid container spacing ={3}>
          <Grid item xs={4}>
              <TempChart />
          </Grid>
          <Grid item xs={4}>
            <MoistureChart />
          </Grid>
          <Grid item xs={4}>
            <HumidChart />
          </Grid>
      </Grid>
    </ChartContainer>
  </Box>
  );
}

export default App;
