import React, { useState } from "react";
import { connect, Global, styled, css } from "frontity";
import Link from "@frontity/components/link";
import list from "./list";

/*
    Plan :
    1. Mendapatkan gambar dari 3 post terakhir
    2. Merubah sesuai dengan desain awal 
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
              <a key={list.id} link={headingNews.link}>
                <div class="headingImage">
                  <img src={pict} alt="gambar-heading" />
                </div>
                <h3>{headingNews.title.rendered}</h3>
              </a>
            );
          }
        }
      })}
    </HeadingContainer>
  );
};

export default connect(Heading);
const HeadingContainer = styled.header`
    
`;

