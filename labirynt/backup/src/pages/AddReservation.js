import React, {useEffect, useRef, useState} from 'react';
import Header from "../components/Header";
import MyAccountPersonalData from "../components/MyAccountPersonalData";
import MyAccountPetList from "../components/MyAccountPetList";
import Footer from "../components/Footer";
import registerImg from "../static/img/dodaj-zwierzaka.jpg";
import * as Yup from "yup";
import {useFormik} from "formik";
import contactIcon from "../static/img/phone.svg";

const AddReservation = () => {
    const [hotelName, setHotelName] = useState("");
    const [pets, setPets] = useState([]);
    const [price, setPrice] = useState(250);
    const [success, setSuccess] = useState(0);

    const form = useRef(null);
    const feedback = useRef(null);
    const imgWrapper = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        /* Pobieranie info o jaki hotel i o jakie zwierzaki chodzi */
        setHotelName("Petlandia");
        setPets(['Pies', 'Kot'])
    }, []);

    const validationSchema = Yup.object({
        dateFrom: Yup.date()
            .required('Wpisz datę rozpoczęcia pobytu'),
        dateTo: Yup.date()
            .required("Wpisz datę zakończenia pobytu")
    });

    const formik = useFormik({
        initialValues: {
            dateFrom: '',
            dateTo: ''
        },
        validationSchema,
        onSubmit: values => {
            /* ZAPYTANIE DODAJACE REZERWACJE DO BAZY */

            /* Po zwroceniu odpowiedzi z serwera */
            if(1) setSuccess(1);
            else setSuccess(-1);

        }
    });

    useEffect(() => {
        if(success) {
            container.current.style.height = '100vh';
            form.current.style.opacity = '0';
            imgWrapper.current.style.opacity = '0';
            feedback.current.style.opacity = '1';
            feedback.current.style.display = 'block';
        }
    }, [success]);

    return (
        <div className="container container--addPet">
            <Header loggedIn={true} />
            <main className="register register--login flex" ref={container}>
                <figure className="register__imgWrapper" ref={imgWrapper}>
                    <img className="img--height" src={registerImg} alt="zarejestruj-sie" />
                </figure>
                <div className="formResponse" ref={feedback}>
                    <h4>
                        {success === 1 ? 'Twoja rezerwacja została złożona i czeka na odpowiedź właściciela hotelu.' : 'Coś poszło nie tak. Prosimy spróbować później.'}
                    </h4>
                    <a className="formSubmitBtn formSubmitBtn--formResponse flex" href="/">
                        Wróć na stronę główną
                    </a>
                </div>
                <form className="addPetForm" onSubmit={formik.handleSubmit} ref={form}>
                    <h1 className="pageHeader">
                        Dodaj rezerwację
                    </h1>
                    <label className="addPet__label flex">
                        Hotel:
                        <span>
                            {hotelName}
                        </span>
                    </label>
                    <label className="addPet__label flex">
                        Zwierzęta do oddania:
                        <span>
                            {pets?.map((item, index) => {
                                return <h4 className="addReservation__pet" key={index}>
                                    {item}
                                </h4>
                            })}
                        </span>
                    </label>
                    <label className="addPet__label flex">
                        Cena:
                        <span className="bold">
                            {price} PLN
                        </span>
                    </label>
                    <label className="addPet__label flex">
                        Data rozpoczęcia
                        <input className="addPet__input"
                               type="date"
                               name="dateFrom"
                               value={formik.values.dateFrom}
                               onChange={formik.handleChange} />
                        {formik.touched.dateFrom && formik.errors.dateFrom ? <span className="error">{formik.errors.dateFrom}</span> : ""}
                    </label>
                    <label className="addPet__label flex">
                        Data zakończenia
                        <input className="addPet__input"
                               type="date"
                               name="dateTo"
                               value={formik.values.dateTo}
                               onChange={formik.handleChange} />
                        {formik.touched.dateTo && formik.errors.dateTo ? <span className="error">{formik.errors.dateTo}</span> : ""}
                    </label>
                    <button className="formSubmitBtn">
                        Złóż rezerwację
                    </button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default AddReservation;
