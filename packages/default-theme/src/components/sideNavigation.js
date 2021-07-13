import React from 'react';
import { connect, Global, css, styled } from 'frontity';
import Link from '@frontity/components/link';

const SideNavigation = () =>{
    return(
        <>
        <SideMenu>
            <Link className="active navbarLink" link="/">HOME</Link>
            <Link className="navbarLink" link="/category/news/page/2">NEWS</Link>
            <Link className="navbarLink" link="/tentang-kami/">ABOUT US</Link>
            <a className="navbarLink" href="#contact">CONTACT</a>
        </SideMenu>
        </>
    )
}

export default connect(SideNavigation);
const SideMenu = styled.div`
    position: fixed;
    width: 100vw;
    background: hsl(0, 0%, 13%);
    left: 0;
    top: -500px;
    z-index: 9;
    display: flex;
    flex-flow:column;
    padding-top: 64px;
    & > a{
        display: block;
        text-decoration: none;
        color: white;
        padding: 24px;
        font-family: helvetica,"Segoe UI",Roboto,'sans-serif';
        letter-spacing: .6px;
    }
    & > a:hover{
        background: hsl(0, 0%, 28%);
    }
`
