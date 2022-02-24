import React, {useState} from 'react';
import Header from "../components/Header";
import registerImg from "../static/img/undraw-1.svg";

const RemindPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = () => {

    }

    return <div className="container">
        <Header />
        <main className="register w register--login flex">
            <figure className="register__imgWrapper register__imgWrapper--password">
                <img className="btn__img" src={registerImg} alt="zarejestruj-sie" />
            </figure>
            <form className="register__form center">
                <h2 className="register__header">
                    Przypomnij hasło
                </h2>
                <p className="register__text">
                    Na podany adres e-mail wysłane zostanie nowe tymczasowe hasło.
                </p>
                <label className="label">
                    <input className="formInput"
                           name="email"
                           placeholder="Adres e-mail"
                           value={email}
                           onChange={(e) => { setEmail(e.target.value); }} />
                </label>
                <button className="formSubmitBtn">
                    Resetuj hasło
                </button>
            </form>
        </main>
    </div>
};

export default RemindPassword;
