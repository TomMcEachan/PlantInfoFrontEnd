import styled from "styled-components";

export const Container = styled.div`
    padding: 50px;
    margin-top: 25px;
    background-color: ${props => props.backgroundColor};
`

export const ChartContainer = styled(Container) `
    padding: 30px;
    background: ${props => props.backgroundColor};
`
