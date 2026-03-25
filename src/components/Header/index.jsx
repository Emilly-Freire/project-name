import React from "react"
import styled from "styled-components"
import { useNavigate } from 'react-router'

const Container = styled.div`
    display: flex;
    position: relative;
    top: 0px;
    width: 100%;
    height: 120px;
    background-color: lightblue;
    align-items: center;
`

const Logo = styled.div`
    flex: 3;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    padding-left: 30px;
    font-size: 32px;
    font-weight: bold;
    color: white;
`

const Nav = styled.nav`
    flex: 1;    
    display: flex;
    justify-content: space-around;
`

const NavItem = styled.a`
    font-size: 18px;
    font-weight: bold;
    color: white;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`

export default function Header(props) {

    const navigate = useNavigate();

    return (
        <Container>
            <Logo>{props.title}</Logo>
            <Nav>
                <NavItem onClick={()=> navigate('/')}>Home</NavItem>
                <NavItem onClick={()=> navigate('/profile')}>Profile</NavItem>
                <NavItem onClick={()=> navigate('/contact')}>Contact</NavItem>
            </Nav>
        </Container>
    )
}

