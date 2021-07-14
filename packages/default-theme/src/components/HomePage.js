import React from "react";
import List from "./list";
import Heading from "./heading";
import Branding from "./branding";
import { styled } from "frontity";
import Button from "./button";


const HomePage = () => {
  return (
    <section>
      <Heading />
      <TitleContainer>
        <TitleMenu>
          Berita <Bolder>Terbaru</Bolder>
        </TitleMenu>
        <IconTrending
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </IconTrending>
        <Line></Line>
      </TitleContainer>
      <List />
      <Button />
      <Branding />
    </section>
  );
};

export default HomePage;

const TitleContainer = styled.div`
  margin: 76px auto 0;
  width: 90vw;
  display: flex;
  align-items: center;
`;

const TitleMenu = styled.h2`
  font-size: 100;
  color: #202124;
`;

const IconTrending = styled.svg`
  color: #202124;
  width: 32px;
  height: auto;
  margin: 18px;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid black;
`;
const Line = styled.div`
  width: 80%;
  height: 2px;
  background: rgb(50, 50, 50);
`;
const Bolder = styled.span`
  font-weight: 800;
`;

