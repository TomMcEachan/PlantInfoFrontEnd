import styled from 'styled-components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

/**
 * Creates the Styles for the GetData Button
 */
const DataButton = styled.button`
    width: 200px;
    height: 50px;
    font-size: 80%;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    transition: background-color 30ms ease-out 100ms;

    /*The resulting background color will be based on the bg props.*/
    background-color: ${props => props.backgroundColor};

    /*The resulting text-color will be based on the color props.*/
    color: ${props => props.color};
    margin: 5px;

    &:hover {
    background-color: #17C420;
    color: white;
    transition: all .3s;
    animation: shake 0.82s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    transform: translate3d(0,0,0);
    perspective: 1000px;
    }

    @keyframes shake {
        10%, 90% {
        transform: translate3d(-1px, 0, 0);
        }
        20%, 80% {
        transform: translate3d(2px, 0, 0);
        }
  
        30%, 50%, 70% {
        transform: translate3d(-2px, 0, 0);
        }
        40%, 60% {
        transform: translate3d(2px, 0, 0);
        }
    }
`;



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
                    <DataButton backgroundColor="black" color="white" key={id} onClick={() => routeHandler(route)}>{text}</DataButton>
                    ))}
                </Grid>
           </Grid>
        </Box>
    );
}

export default RouteButton;