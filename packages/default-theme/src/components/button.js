import React from 'react'
import Link from "@frontity/components/link";
import { styled } from "frontity";

const button = () => {
    return (
        <ButtonContainer>
        <Link link="/category/news/page/2">
          BERITA LAIN
          <Icon>
            <svg
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </Icon>
        </Link>
      </ButtonContainer>
    )
}

export default button

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -40px;
  & > a {
    padding: 12px 28px;
    background: #a70807;
    color: #f1f1f1;
    display: inline-block;
    border-radius: 8px;
    font-family: helvetica;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.8px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 4px 12px rgba(32, 33, 36, 0.5);
    text-decoration: none;
    transition: .3s;
  }
  & > a:hover{
    background: #710000;
    box-shadow: none;
  }
`;

const Icon = styled.span`
  & > svg {
    width: 32px;
    heigth: auto;
    margin-left: 8px;
  }
`;