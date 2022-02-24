import React from 'react';
import Header from "../components/Header";
import MyAccountPersonalData from "../components/MyAccountPersonalData";
import MyAccountPetList from "../components/MyAccountPetList";
import Footer from "../components/Footer";
import registerImg from "../static/img/undraw-3.svg";

const MyAccountHotelOwner = () => {
    return (
        <div className="container">
            <Header loggedIn={true} />
            <h1 className="pageHeader">
                Moje konto
            </h1>
            <main className="myAccount w flex">
                <figure className="register__imgWrapper">
                    <img className="btn__img" src={registerImg} alt="zarejestruj-sie" />
                </figure>
                <MyAccountPersonalData />
            </main>
            <Footer />
        </div>
    );
};

export default MyAccountHotelOwner;
