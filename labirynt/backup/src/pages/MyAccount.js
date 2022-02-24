import React from 'react';
import Header from "../components/Header";
import MyAccountPersonalData from "../components/MyAccountPersonalData";
import MyAccountPetList from "../components/MyAccountPetList";
import Footer from "../components/Footer";

const MyAccount = () => {
    return (
        <div className="container">
            <Header loggedIn={true} />
            <h1 className="pageHeader">
                Moje konto
            </h1>
            <main className="myAccount w flex">
                <MyAccountPersonalData />
                <MyAccountPetList />
            </main>
            <Footer />
        </div>
    );
};

export default MyAccount;
