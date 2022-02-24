import React from 'react';
import hotelIcon from '../static/img/pet-house.svg'
import calendarIcon from '../static/img/calendar.svg'
import catIcon from '../static/img/cat.svg'
import dogIcon from '../static/img/dog.svg'

const SingleReservation = ({from, to, hotel, forHotelOwner, pets, status}) => {
    const acceptReservation = () => {
        /* WYSYLANIE ZAPYTANIA AKCEPTUJACEGO REZERWACJE */
    }

    const rejectReservation = () => {
        /* WYSYLANIE ZAPYTANIA ODRZUCAJACEGO REZERWACJE */
    }

    const getDate = (date) => {
        return date.getDate() + "." + date.getMonth()+1 + "." + date.getFullYear();
    }

    return (
        <section className="singleReservation flex">
            <section className="singleReservation__left">
                <p className="singleReservation__date singleReservation__date--hotelName">
                    <span className="singleReservation__key">
                        <img className="icon" src={hotelIcon} alt="hotel" />
                    </span>
                    <span className="singleReservation__value singleReservation__value--hotelName">
                        {hotel}
                    </span>
                </p>
               <div className="singleReservation__dates flex">
                   <p className="singleReservation__date">
                    <span className="singleReservation__key">
                        <img className="icon--calendar" src={calendarIcon} alt="hotel" />
                    </span>
                    <span className="singleReservation__value">
                        {getDate(from)}
                    </span>
                   </p>
                   <p className="singleReservation__date singleReservation__date--second">
                    <span className="singleReservation__key">
                        <img className="icon--calendar" src={calendarIcon} alt="hotel" />
                    </span>
                    <span className="singleReservation__value">
                        {getDate(to)}
                    </span>
                   </p>
               </div>
                <p className="singleReservation__date">
                    <span className="singleReservation__key">
                        Zwierzaki:
                    </span>
                    <span className="singleReservation__value">
                        {pets.name}
                    </span>
                    <span className="singleReservation__value">
                        <span>
                            <img className="icon--pet" src={dogIcon} alt="pies" /> x2
                        </span>
                        <span>
                            <img className="icon--pet" src={catIcon} alt="pies" /> x1
                        </span>
                    </span>
                </p>
            </section>
            {!forHotelOwner ? (status === -1 ? <h4 className="singleReservation__status singleReservation__status--negative">
                Odrzucono
            </h4> : (status === 0 ? <h4 className="singleReservation__status singleReservation__status--neutral">
                Oczekujące
            </h4> : <h4 className="singleReservation__status singleReservation__status--positive">
                Zaakceptowano
            </h4>)) : (
                    status === 0 ? <section className="singleReservation__buttons">
                        <button className="singleReservation__status singleReservation__status--positive" onClick={() => { acceptReservation(); }}>
                            Zatwierdź
                        </button>
                        <button className="singleReservation__status singleReservation__status--negative" onClick={() => { rejectReservation(); }}>
                            Odrzuć
                        </button>
                    </section> : (status === 1 ? <h4 className="singleReservation__status singleReservation__status--positive">
                        Zatwierdzone
                    </h4> : <h4 className="singleReservation__status singleReservation__status--negative">
                        Odrzucone
                    </h4>)
                )}
        </section>
    );
};

export default SingleReservation;
