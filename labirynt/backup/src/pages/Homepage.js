import React from 'react'
import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import Hotels from "../components/hotelList/Hotels";
const Homepage = () => {
    return <div className="container">
        <Header />
        <SearchSection />
        <Hotels/>
    </div>
}

export default Homepage;
