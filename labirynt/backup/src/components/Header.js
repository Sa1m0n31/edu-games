import React from 'react'
import heart from '../static/img/like.svg'
import logo from '../static/img/petmypet-logo-transparent.png'
import userIcon from '../static/img/user.svg'
import bell from '../static/img/bell.svg'
import logoutIcon from '../static/img/logout.svg'

const Header = ({loggedIn}) => {
    const logout = () => {
        // logout logic
    }

    return <header className="topBar flex">
        <a className="topBar__logo" href="/">
            <img className="btn__img" src={logo} alt="pet-my-pet" />
        </a>

        {!loggedIn ? <section className="topBar__buttons flex">
            <a className="topBar__btn" href="/zarejestruj-sie">
                Zarejestruj się
            </a>
            <a className="topBar__btn" href="/zaloguj-sie">
                Zaloguj się
            </a>
        </section> : <section className="topBar__buttons topBar__buttons--myAccount flex">
            <a className="topBar__myAccount" href="/ulubione">
                <img className="topBar__myAccount__img" src={heart} alt="ulubione-hotele" />
            </a>
            <a className="topBar__myAccount" href="/moje-rezerwacje">
                <img className="topBar__myAccount__img" src={bell} alt="moje-powiadomienia" />
            </a>
            <a className="topBar__myAccount" href="/moje-konto">
               <img className="topBar__myAccount__img" src={userIcon} alt="moje-konto" />
            </a>
            <button className="topBar__myAccount" onClick={() => { logout(); }} >
                <img className="topBar__myAccount__img" src={logoutIcon} alt="wyloguj-sie" />
            </button>
        </section>}
    </header>
}

export default Header;
