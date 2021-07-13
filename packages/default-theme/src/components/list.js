import React from 'react';
import Link from '@frontity/components/link';
import dayjs from 'dayjs';
import {connect, Global, css, styled } from 'frontity'

/*
    Plan:
    1. Mendapatkan gambar dari masing-masing post (post > 3) (x)
    2. Mendapatkan nama penulis & tanggal dari masing-masing post (post > 3) (x)
    3. Merubah tampilan sesuai dengan desain
    *4. Menambahkan perkiraan waktu baca setiap postingan
*/

const List = ({state})=>{
    const data = state.source.get(state.router.link)
    return(
        <ArticleContainer>
            {data.items.map((list,index) =>{
                if(index >= 5 ){
                    const post = state.source[list.type][list.id]
                    const formattedDate = dayjs(post.date).format("DD MMM YYYY")
                    const author = state.source.author[post.author].name
                    const fmedia = post.featured_media
                    if(fmedia > 0){
                        const pict = state.source.attachment[fmedia].source_url
                        return(
                            <Article key={list.id}>
                                <Numbering>01</Numbering>
                                <div><img src={pict} alt="article-image" width="200px" height="100px" /></div>
                                <div>
                                    <Link link={post.link}>{post.title.rendered}</Link>
                                </div>
                            </Article>
                        )
                    }
                }
            })}
        </ArticleContainer>
    )
}

export default connect(List);

const ArticleContainer = styled.div`
    width: 90vw;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    background: red;
    justify-content: space-around;
`
const Article = styled.article`
    width: 500px;
    height: 150px;
    display: flex;
    background: green;
    margin: 24px;
`
const Numbering = styled.h4`
    font-size: 48px;
`