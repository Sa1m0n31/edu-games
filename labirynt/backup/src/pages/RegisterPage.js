import React, { useState, useEffect } from 'react';
import Header from "../components/Header"
import registerImg from '../static/img/undraw-1.svg'
import RegisterAsHotelOwner from "../components/RegisterAsHotelOwner";
import RegisterAsPetOwner from "../components/RegisterAsPetOwner";

const RegisterPage = () => {
    const [accountType, setAccountType] = useState(0); // 0 - pet owner, 1 - hotel owner

    return <div className="container">
        <Header />
        <main className="register w flex">
            <figure className="register__imgWrapper register__imgWrapper--register">
                <img className="btn__img" src={registerImg} alt="zarejestruj-sie" />
            </figure>
            <div className="register__form register__form--register">
                <h2 className="register__header">
                    Zarejestruj się
                </h2>
                <section className="register__buttons flex">
                    <button type="button" className={accountType === 0 ? "register__btn register__btn--selected" : "register__btn"} onClick={() => { setAccountType(0) }}>
                        Właściciel zwierzaka
                    </button>
                    <button type="button" className={accountType === 1 ? "register__btn register__btn--selected" : "register__btn"} onClick={() => { setAccountType(1) }}>
                        Właściciel hotelu
                    </button>
                </section>
                {accountType ? <RegisterAsHotelOwner /> : <RegisterAsPetOwner />}
            </div>
        </main>
    </div>
};

export default RegisterPage;
