import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 70px;
    background-color: ${props => props.backcolor || 'grey'};
    color: ${props => props.color || 'white'};
    opacity: 0.7;
    box-shadow: 5px 5px 3px grey;
    margin-top: 3px;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: bold;
`