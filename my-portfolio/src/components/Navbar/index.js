import React from 'react'
import styled from 'styled-components';
import {Nav, NavLink} from 'react-router-dom';


const Nav = styled.div `
  background-color: ${({theme}) => theme.card_light}
  height:80px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index: 10;
  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Navlogo>Logo</Navlogo>
        <MobileIcon></MobileIcon>
        <NavItems>
          <NavLink></NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton>Github Profle</GithubButton>
        </ButtonContainer>
      </NavContainer>
    </Nav>
  )
}

export default Navbar