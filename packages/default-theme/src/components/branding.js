import React from "react";
import { connect, Global, css, styled } from "frontity";

const branding = () => {
  return (
    <BrandingContainer>
      <SourceBranding>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lGdzEvmwMuU"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </SourceBranding>
      <DescriptionBranding>
        <TitleBranding>Siapakah Kami?</TitleBranding>
        <p>
         UKM R’nB Undip merupakan sebuah UKM yang ada di Universitas
          Diponegoro. R’nB memposisikan dirinya sebagai komunitas mahasiswa yang
          bergerak di bidang technopreneur dan mulai berbenah diri untuk bisa
          mendukung terciptanya budaya penelitian dan kewirausahaan di kalangan
          mahasiswa Universitas Diponegoro.
        </p>
      </DescriptionBranding>
    </BrandingContainer>
  );
};

export default branding;

const BrandingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-top: 128px;
`;
const SourceBranding = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e1e1e1;
  padding: 20px 0;
  & > iframe{
    border-radius: 8px;
  }
`;
const DescriptionBranding = styled.div`
  flex: 2;
  background: #202124;
  color: #f1f1f1;
  padding: 40px 90px;
  & > p{
    font-size: 18px;
    font-weight: 100;
    font-family: helvetica, roboto;
    letter-spacing: .8px;
    line-height: 150%;
  }
`;

const TitleBranding = styled.h3`
    font-size: 32px;
    font-weight: 800;
    font-family: helvetica, roboto;
`