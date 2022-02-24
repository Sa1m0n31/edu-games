import React, {useEffect, useRef, useState} from 'react';
import Header from "../components/Header";
import MyAccountPersonalData from "../components/MyAccountPersonalData";
import MyAccountPetList from "../components/MyAccountPetList";
import Footer from "../components/Footer";
import ReactSiema from "react-siema";
import arrow from '../static/img/arrow.svg'
import credentials from "../static/credentials";
import { GoogleMap, Marker } from "react-google-maps"
import starImg from '../static/img/star.svg'
import contactIcon from '../static/img/phone.svg'
import locationIcon from '../static/img/location-icon.svg'

import example from '../static/img/bedroom.jpg'
import MapContainer from "../components/GoogleMap";
import GoogleMaps from "../components/GoogleMap";

const SingleHotel = () => {
    let gallerySlider;

    const [hotel, setHotel] = useState({});
    const [images, setImages] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const hotelId = params.get('id');

        /* TU POBIERAMY DANE O HOTELU NA PODSTAWIE ID W ADRESIE URL */

        setHotel({
            name: 'Hotel Petlandia',
            rating: 4.9,
            ownerName: 'Marek',
            phoneNumber: '600179174',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim euismod nulla in tincidunt. Morbi leo purus, fermentum ac pulvinar et, interdum ac sapien. Morbi vehicula, urna fermentum rutrum congue, dolor sem condimentum purus, id pulvinar lectus sem id nunc. Cras lacinia viverra posuere. Maecenas at lobortis velit. Nulla facilisi. Vivamus sit amet placerat lectus, in accumsan sapien. Vestibulum suscipit laoreet ornare. Phasellus non lectus vitae justo venenatis rutrum.',
            city: 'Toruń',
            postalCode: '87-100',
            street: 'Matejki',
            building: '92',
            flat: '13'
        });

        /* TU POBIERAMY ADRESY ZDJEC DANEGO HOTELU */

        setImages([example, example, example, example]);
    }, []);

    const galleryNext = () => {
        gallerySlider.next();
    }

    const galleryPrev = () => {
        gallerySlider.prev();
    }

    return <div className="container">
        <Header loggedIn={true} />
        <main className="singleHotel w">
            <section className="w flex">
                <div className="gallerySlider">
                    <button className="gallerySlider__btn" onClick={() => { galleryPrev(); }}>
                        <img className="gallerySlider__btn__img" src={arrow} alt="poprzedni" />
                    </button>
                    {images?.length ? <ReactSiema ref={siema => gallerySlider = siema} loop={true}>
                        {images.map((item, index) => {
                            return <figure className="gallerySlider__item" key={index}>
                                <img className="btn__img" src={item} alt={`galeria-zdjec-${index}`} />
                            </figure>
                        })}
                    </ReactSiema> : ""}
                    <button className="gallerySlider__btn" onClick={() => { galleryNext(); }}>
                        <img className="gallerySlider__btn__img" src={arrow} alt="nastepny" />
                    </button>
                </div>
                <div className="hotelAddress">
                    <section className="singleHotel__address flex">
                        <img className="locationIcon" src={locationIcon} alt="lokalizacja" />
                        <section>
                            <h4 className="singleHotel__contactSection__smallHeader">
                                Adres
                            </h4>
                            <h3 className="singleHotel__contactSection__hotelOwner">
                                ul. {hotel.street} {hotel.building}{hotel.flat ? `/${hotel.flat}` : ''}<br/>
                                {hotel.postalCode} {hotel.city}
                            </h3>
                        </section>
                    </section>
                    <div className="mapContainer">
                        <GoogleMaps />
                    </div>
                </div>
            </section>
            <section className="singleHotel--section2 w flex">
                <header className="singleHotel__header flex">
                    <h1 className="singleHotel__name">
                        Hotel Petlandia
                    </h1>
                    <section className="singleHotel__rating flex">
                        <h2 className="singleHotel__rating__text">
                            <span>
                                {hotel.rating}
                            </span>
                            /
                            <span>
                                5
                            </span>
                        </h2>
                        <img className="singleHotel__star" src={starImg} alt="gwiazda" />
                    </section>
                </header>
                <section className="singleHotel__contactSection flex">
                    <section>
                        <h4 className="singleHotel__contactSection__smallHeader">
                            Właściciel hotelu
                        </h4>
                        <h3 className="singleHotel__contactSection__hotelOwner">
                            {hotel.ownerName}
                        </h3>
                    </section>
                    <a className="formSubmitBtn formSubmitBtn--singleHotelContact flex" href={`tel:+48${hotel.phoneNumber}`}>
                        <img className="icon" src={contactIcon} alt="telefon" />
                        {hotel.phoneNumber?.substring(0, 3) + ' ' + hotel.phoneNumber?.substring(3, 6) + ' ' + hotel.phoneNumber?.substring(6, 9)}
                    </a>
                </section>
                <section className="singleHotel--section3 w flex">
                    <header className="singleHotel__header flex">
                        <h1 className="singleHotel__name">
                            ????????????
                        </h1>
                        <section className="singleHotel__rating flex">
                            <a className="formSubmitBtn formSubmitBtn--singleHotelContact flex" href="/zloz-rezerwacje">
                                Złóż zamówienie
                            </a>
                        </section>
                    </header>
                    <section className="singleHotel__contactSection flex">
                       Kalendarz
                    </section>
                </section>
                <section className="singleHotel__description">
                    <h3 className="singleHotel__description__header">
                        Opis
                    </h3>
                    <p>
                        {hotel.description}
                    </p>
                </section>
            </section>
        </main>
        <Footer />
    </div>
};

export default SingleHotel;
