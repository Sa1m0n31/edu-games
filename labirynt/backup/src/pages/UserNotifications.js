import React from 'react';
import Header from "../components/Header";
import registerImg from "../static/img/undraw-3.svg";
import Footer from "../components/Footer";
import SingleReservation from "../components/SingleReservation";
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';

const UserNotifications = () => {
    const [reservations, setReservations] = useState([])
    const userName = useSelector((state) => state.userInfo.username)
    // bedzie dzialac po poprawieniu frontu, na sztywno nie dziala przekazywanie state'a
    useEffect(() => {
        getReservations(userName).then(data => setReservations(data));
    }, []);


    return (
        <div className="container container--userNotifications">
            <Header loggedIn={true} />
            <h1 className="pageHeader pageHeader--notifications">
                Moje rezerwacje
            </h1>
            <main className="userNotifications w flex">
                <figure className="register__imgWrapper register__imgWrapper--notifications">
                    <img className="btn__img" src={registerImg} alt="zarejestruj-sie" />
                </figure>
                <main className="myNotifications">
                    {reservations ? reservations.map((reservation) =>
                        <SingleReservation key={reservation.id}
                                           hotel={reservation.hotel.name} status={reservation.status} from={reservation.checkIn} to={reservation.checkOut}
                                           pets = {reservation.animal}
                        />) : <h1>blad wczytywania</h1>}
                </main>
            </main>
            <Footer />
        </div>
    );
};

function getReservations(userName) {
    const axios = require('axios');
    return axios.get(`/userReservations/${userName}`)
        .then(function (response) {
            if (response.statusText === 'OK' && response.status === 200) {
                return response.data;
            } else {
                throw new Error('Problem z pobieraniem danych!');
            }
        })
        .catch(function (error) {
            console.log(error)
        });
}

export default UserNotifications;
