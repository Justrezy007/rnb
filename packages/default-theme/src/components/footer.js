import React from 'react';
import { connect, Global, css, styled } from "frontity";

const Footer = () => {
    return(
        <FooterContainer>
            <FooterDetail>
                <address>Jl. Prof. Sudarto No.13, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275</address>
                <p>Hubungi kami di +62-852-010-456</p>
                <p>Berikan Saran melalui <a href="mailto:ukmrnb@gmail.com">ukmrnb@gmail.com</a></p>
            </FooterDetail>
            <FooterContact>
                <h2>Temukan Kami</h2>
                <div>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </FooterContact>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    width: 100%;
    padding: 28px 32px;
    box-sizing: border-box;
    background: #000000;
    margin-top: 200px;
    color: #f1f1f1;
    display: flex;
    font-family: helvetica, roboto;
`
const FooterDetail = styled.div`
    background: green;
    font-size: 18px;
    flex: 3;
`
const FooterContact = styled.div`
    background: yellow;
    flex: 2;
`