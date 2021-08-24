import React from 'react'
import './Home.css'
import Banner from './Banner';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <section className="home__section">
                <Card />
                <Card />
                <Card />
            </section>
            <section className="home__section">
                <Card />
                <Card />
                <Card />
            </section>
        </div>
    )
}

export default Home
