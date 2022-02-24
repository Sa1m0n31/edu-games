import React from 'react';
import logo from '../static/img/petmypet-logo-transparent.png'

const Footer = () => {
    return <footer className="footer">
        <img className="footer__logo" src={logo} alt="pet-my-pet" />
        <h6 className="footer__header">
            PetMyPet
        </h6>
        <h6 className="footer__header">
            &copy; { new Date().getFullYear() } Zespół nr 4
        </h6>
    </footer>
};

export default Footer;
