import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


/**
 * An Array with the information required to render the DataButton
 */
const ButtonList = [
    {id:"1",    text: "Get Moisture Data (JSON)",      route:"https://plantinfo-api.netlify.app/.netlify/functions/moisture"},
    {id:"2",    text: "Get Temperature Data (JSON)",   route:"https://plantinfo-api.netlify.app/.netlify/functions/temperature"},
    {id:"3",    text: "Get Humidity Data (JSON)",      route:"https://plantinfo-api.netlify.app/.netlify/functions/humidity"}
]


function routeHandler(route) {
    console.log(route)
    window.open(route, "_blank");
}


/**
 * This Function returns DataButtons
 */
function RouteButton() {
    return (
        
       <Box sx={{flexGrow: 1 }}>
           <Grid container spacing ={3}>
                <Grid item xs>
                    {ButtonList.map(( {id, text, route}) => (
                    <button key={id} onClick={() => routeHandler(route)}>{text}</button>
                    ))}
                </Grid>
           </Grid>
        </Box>
    );
}

export default RouteButton;