import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
    return (

<ContenedorHeader>
            <Titulo>Bienvenido a mi Blog</Titulo>
            <Menu>
            <NavLink to="/"> Inicio</NavLink>
            <NavLink to="/Blog"> Blog</NavLink>
            <NavLink to="/Acerca-de"> Acerca de</NavLink>
            </Menu>
          </ContenedorHeader>
          );
    
}

const ContenedorHeader = styled.header`
    text-align: center;
    marggin-bottom: 40px
`;
const Titulo = styled.h1`
    marggin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
`;


const Menu = styled.nav`
    a {
        text-decoration:none;
        color #165168;
        margin:0 10px;
    }
    a: hover {
        color:#19168;
    }
    a.active {
        border-bottom: 2px solid #165168;
        padding-bottom:3px;
    }
`;
export default Header;