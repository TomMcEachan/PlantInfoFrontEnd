import styled from "styled-components";

export const Container = styled.div`
    padding: 50px;
    background-color: ${props => props.backgroundColor};
`

export const ChartContainer = styled(Container) `
    padding: 15px;
    border-color: black;
    border-style: solid;
    border-width: 3px;
`
