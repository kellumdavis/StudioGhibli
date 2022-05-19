import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'

export const Nav = styled.nav`
background: rgba(56,82,123, 1);
height: 80px;
display: flex;
justify-content: center;
padding: 0.5rem calc((100vw - 1000px) /2);
z-index:10;
`
export const a = styled(FaGithub)`
text-decoration: none;
color: aliceblue;
`

export const NavLink = styled(Link)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 ;
 margin:  0 2rem;
 height: 100%;
 cursor: pointer;

 &.active {
     color: #15cdfc;

 }
 &:hover {
    transition: all 0.2s ease;
    transform: scale(1.1);
}
`

export const MobileIcon = styled.div`
 display: none;
 color: #fff;

 @media screen and (max-width: 768px) {
     display: block;
     position: absolute;
     top: 40px;
     right: 0;
     margin: 0 1rem;
     transform: translate(-100%,75%)
     font-size: 1.8rem;
     cursor: pointer;
 }
`

export const NavMenu = styled.div`
 display: flex;
 align-items: center;
 margin-right: -24px;

 @media screen and (max-width: 768px) {
     display: none;
 }
`

export const NavBtn = styled.nav`
display:flex;
align-items:center;
margin-right: 24px;

@media screen and (max-width: 768px)  {
    display:none;
}
`

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
border:none;
outline:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    transform: scale(1.1);
}
`