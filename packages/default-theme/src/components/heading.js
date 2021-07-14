import React from "react";
import { connect, styled } from "frontity";

/*
    Plan :
    1. Mendapatkan gambar dari 3 post terakhir(x)
    2. Merubah sesuai dengan desain awal (x)
    Membuat heading news menjadi slideshow -> terutama untuk tampilan hp
*/

//State untuk Judul

const Heading = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <HeadingContainer>
      {data.items.map((list, index) => {
        const headingNews = state.source[list.type][list.id];
        if (index <= 4  ) {
          const fmedia = headingNews.featured_media;
          if (fmedia > 0) {
            const pict = state.source.attachment[fmedia].source_url;
            return (
              <Item key={list.id} href={headingNews.link}>
                  <Image src={pict} alt="gambar-heading" />
                <Title>{headingNews.title.rendered}</Title>
              </Item>
            );
          }
        }
      })}
    </HeadingContainer>
  );
};

export default connect(Heading);
const HeadingContainer = styled.header`
    width: 100%;
    padding-top: 128px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    & > a::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0,0,0,0) 5%, rgba(0,0,0,1) 100%);
        top: 0;
        left: 0;
        display: block;
        border-radius: 8px;
    }     
    & > a:hover{
        transform:scale(1.05);
        opacity: 1;
        transition: .3s;
    }
`;

const Item = styled.a`
    width: 384px;
    height: 256px;
    position: relative;
    display: flex;
    align-items: flex-end;
    opacity: 0.9;
`
const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
`
const Title = styled.h3`
    margin: 18px;
    color: #f1f1f1;
    z-index: 2;
    position:absolute;
    text-shadow: 3px 3px rgba(113, 0, 0,.8);
    font-family: helvetica;
    line-height: 150%;
`

