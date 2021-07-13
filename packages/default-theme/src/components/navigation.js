import React from 'react';
import Link from "@frontity/components/link";
import { connect, Global, css, styled } from 'frontity';

const Navigation = ({state}) =>{
    return(
        <Navbar>
            <div>
                <Logo>
                    <img src="https://i.ibb.co/4Rgr0VH/LOGO-RNB.png" alt="LOGO-RNB"/>
                </Logo>
                <NavMenu>
                    <Link className="active navbarLink" link="/">HOME</Link>
                    <Link className="navbarLink" link="/category/news/page/2">NEWS</Link>
                    <Link className="navbarLink" link="/tentang-kami/">ABOUT US</Link>
                    <a className="navbarLink" href="#contact">CONTACT</a>
                    <MenuIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg></MenuIcon>
                </NavMenu>
            </div>
        </Navbar>
    )
}

export default Navigation;

const Navbar = styled.nav`
    position : fixed;
    width : 100vw;
    top : 0;
    left : 0;
    z-index: 10;
    padding: 8px 0;
    background-color: #1C1C1C;
    & > div{
        @media (min-width: 768px) and (max-width: 1024px) {
            width: 90vw;
        }
        display : flex;
        width : 80vw; 
        margin: auto;
        justify-content: space-between;
        align-items: center;
    }
`
const Logo = styled.div`
    width: 64px;
    & > img {
        width: 100%;
    }
`
const NavMenu = styled.div`
    font-size: 18px;
    font-weight: 500;
    font-family: helvetica, verdana, "Segoe UI", Roboto, 'sans-serif';
    & > a.navbarLink{
        @media (max-width: 769px){
            display:none;
        }
        text-decoration: none;
        margin: 0 12px;
        color: hsl(0, 0%, 80%);
        opacity: 0.8;
    }
    & > a:hover{
        color: hsl(9, 100%, 60%);
    }
`
const MenuIcon = styled.a`
    @media (max-width: 768px) {
	    display: block;
    }
    @media (min-width: 769px) {
	    display: none;
    }
    color : hsl(0,0%,90%);
    width: 32px;
    cursor: pointer;
`