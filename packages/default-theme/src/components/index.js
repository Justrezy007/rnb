import React from 'react';
import {connect,Global, css} from "frontity";
import Switch from "@frontity/components/switch";
import HomePage from "./HomePage";
import Post from "./post";
import Page from "./page";
import Navigation from "./navigation";
import Footer from "./footer";
import SideNavigation from "./sideNavigation";
/*
    Main plan:
    1. Menambahkan fitur mengenai Lomba yang akan datang -> new menu
*/

const Root = ({state}) =>{
    const data = state.source .get(state.router.link)

    return(
        <>
            <SideNavigation />
            <Navigation />
            <main>
                <Switch>
                    <HomePage when={data.isArchive} />
                    <Post when={data.isPost} />
                    <Page when={data.isPage} />
                </Switch>
            </main>
            <Footer />
            <Global styles={css`
                h1,h2,h3,h4,h5,h6{
                    font-family: 'helvetica','Segoe UI','Roboto','Neue', 'sans-serif';
                }
                body{
                    background-color: #F5F5F6;
                }
                a.active{
                    font-weight: 700;
                    color : hsl(0,0,100%);
                    opacity: 1 !important;
                }
            `} />
        </>
    )
}

export default connect(Root);