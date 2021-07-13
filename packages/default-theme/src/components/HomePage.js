import React from 'react';
import List from "./list";
import Heading from "./heading";

const HomePage = ()=>{
    return(
        <section>
            <Heading />
            <h2>Berita Terbaru</h2>
            <List />
            <div>
                <div><img src="https://i.ibb.co/NSQqYjP/Logo-Kabinet-Masterpiece4-300x269.png" alt="Logo-Kabinet-Masterpiece4-300x269" /></div>
                <div>
                    <h3>Kabinet Master Piece</h3>
                    <p>Merupakan kabinet UKM RnB dibawah lorem ipsum dolor sit amet au reks pitok mamsa galis gie turp a siemk lomaj turiske polojis qaona okena turer wesd a sadi cax.</p>
                </div>
            </div>
        </section>
    )
}

export default HomePage;
