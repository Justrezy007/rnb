import React from "react";
import Link from "@frontity/components/link";
import dayjs from "dayjs";
import { connect, Global, css, styled } from "frontity";

/*
    Plan:
    1. Mendapatkan gambar dari masing-masing post (post > 3) (x)
    2. Mendapatkan nama penulis & tanggal dari masing-masing post (post > 3) (x)
    3. Merubah tampilan sesuai dengan desain
    *4. Menambahkan perkiraan waktu baca setiap postingan
*/

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <ArticleContainer>
      {data.items.map((list, index) => {
        if (index >= 5) {
          const post = state.source[list.type][list.id];
          const formattedDate = dayjs(post.date).format("DD MMM YYYY");
          const author = state.source.author[post.author].name;
          const fmedia = post.featured_media;
          if (fmedia > 0) {
            const pict = state.source.attachment[fmedia].source_url;
            return (
                <Article key={list.id}>
                  <Numbering>0{index - 4}</Numbering>
                  <ImageArticleContainer>
                    <ImageArticle src={pict} alt="article-image" />
                  </ImageArticleContainer>
                  <Description>
                    <Link link={post.link}>{post.title.rendered}</Link>
                    <DetailArticle>
                      <p>{author}</p>
                      <Dot></Dot>
                      <p>{formattedDate}</p>
                    </DetailArticle>
                  </Description>
                </Article>
            );
          }
        }
      })}
    </ArticleContainer>
  );
};

export default connect(List);

const ArticleContainer = styled.div`
  width: 90vw;
  margin: 24px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  & > article:last-child{
    opacity: .5;
  }
`;
const Article = styled.article`
  width: 576px;
  display: flex;
  margin: 18px 28px;
  background: #E1E2E1;
  padding: 24px;
  border-radius: 8px;
`;
const Numbering = styled.h4`
  font-size: 48px;
  font-weight: 800;
  margin: 8px;
  color: #47484c; 
`;
const ImageArticleContainer = styled.div`
  width: 192px;
  height: 128x;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageArticle = styled.img`
  object-fit: cover;
  width: 192px;
  height: 128px;
  border-radius: 8px;
`;
const Description = styled.div`
  margin: 12px;
  & > a {
    color: black;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    font-family: helvetica;
    color: #202124;
    line-height: 120%;
  }
  & > a:hover{
      color: #710000;
  }
`;
const DetailArticle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > p{
    color: #47484c;
  }
`;
const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #47484c;
  margin: 8px;
  border-radius: 50%;
`;