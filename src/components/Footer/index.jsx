import React from 'react'
import styled from 'styled-components'

export default function Footer(props) {

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