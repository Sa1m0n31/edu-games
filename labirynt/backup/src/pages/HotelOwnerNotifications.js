import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import SingleReservation from "../components/SingleReservation";

const HotelOwnerNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        /* ZAPYTANIE DO SERWERA POBIERAJACE NOTYFIKACJE WLASCICIELA HOTELU */
        setNotifications([
            {
                from: new Date(),
                to: new Date(),
                status: 0,
                hotel: 'Fajny hotel',
                pets: ['Kot', 'Pies']
            },
            {
                from: new Date(),
                to: new Date(),
                status: 1,
                hotel: 'Fajny hotel',
                pets: ['Kot', 'Pies']
            },
            {
                from: new Date(),
                to: new Date(),
                status: -1,
                hotel: 'Fajny hotel',
                pets: ['Kot', 'Pies']
            }
        ]);
    }, []);

    return (
        <div className="container container--userNotifications container--hotelNotifications">
            <Header loggedIn={true} />
            <main className="userNotifications flex">
                <main className="myNotifications myNotifications--hotel">
                    <h1 className="pageHeader">
                        Moje rezerwacje
                    </h1>

                    {notifications.map((item, index) => {
                        return <SingleReservation from={item.from}
                                                  to={item.to}
                                                  status={item.status}
                                                  forHotelOwner={true}
                                                  hotel={item.name}
                                                  pets={item.pets} />
                    })}
                </main>
            </main>
            <Footer />
        </div>
    );
};

export default HotelOwnerNotifications;
