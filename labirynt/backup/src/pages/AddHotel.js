import React, {useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Yup from "yup";
import {useFormik} from "formik";
import axios from "axios";

const AddHotel = () => {
    const [status, setStatus] = useState("");
    const [petList, setPetList] = useState([
        { name: 'Pies', selected: false, price: 0 },
        { name: 'Kot', selected: false, price: 0 },
        { name: 'Świnka morska', selected: false, price: 0 },
        { name: 'Chomik', selected: false, price: 0 }
    ])

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Uzupełnij nazwę hotelu'),
        lastName: Yup.string()
            .required('Uzupełnij swoje nazwisko'),
        username: Yup.string()
            .email('To nie jest poprawny adres e-mail')
            .required('Wpisz swój adres e-mail'),
        password: Yup.string()
            .min(4, "Hasło musi mieć co najmniej 4 znaków długości")
            .required("Wpisz swoje hasło"),
        repeatPassword: Yup.string()
            .oneOf([Yup.ref('password')], "Podane hasła nie są identyczne"),
        city: Yup.string()
            .required('Uzupełnij swoje miasto'),
        postalCode: Yup.string()
            .required("Uzupełnij swój kod pocztowy"),
        street: Yup.string()
            .required("Wpisz swój adres"),
        phoneNumber: Yup.string()
            .required("Uzupełnij swój numer telefonu"),
        companyName: Yup.string()
            .required("Uzupełnij nazwę firmy"),
        nip: Yup.string()
            .required('Uzupełnij NIP'),
        regon: Yup.string()
            .required("Uzupełnij REGON")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            city: '',
            postalCode: '',
            street: '',
            phoneNumber: '',
            companyName: '',
            nip: '',
            regon: ''
        },
        validationSchema,
        onSubmit: values => {
            const api = axios.create();

            api.post('/registerOwner', {

            })
                .then((res) => {
                    setStatus("Hotel został dodany");
                });
        },
    });

    const changePrice = (price, name) => {
        setPetList(petList.map((item) => {
            return {
                name: item.name,
                selected: item.selected,
                price: item.name === name ? price : item.price
            }
        }));
    }

    const toggleSelectPet = (name) => {
        setPetList(petList.map((item) => {
            return {
                name: item.name,
                selected: item.name === name ? !item.selected : item.selected,
                price: item.price
            }
        }));
    }

    return <div className="container">
        <Header loggedIn={true} />
        <div className="page page--addHotel">
            <h2 className="pageHeader">
                Dodaj hotel
            </h2>

            <section className="addHotel__section">
                <h3 className="addHotel__section__header">
                    <span className="addHotel__section__header__circle">1</span>
                    <span className="addHotel__section__header__text">Uzupełnij dane</span>
                </h3>

                <form className="register__formContent center"
                      onSubmit={formik.handleSubmit}
                >
                    {status ?  <p>{status}</p>  : ""}

                    <label className="label">
                        <input className="formInput"
                               name="name"
                               placeholder="Nazwa hotelu"
                               value={formik.values.name}
                               onChange={formik.handleChange} />
                        {formik.touched.name && formik.errors.name ? <span className="error">{formik.errors.name}</span> : ""}
                    </label>
                    <label className="label">
                        <input className="formInput"
                               name="street"
                               placeholder="Ulica"
                               value={formik.values.street}
                               onChange={formik.handleChange} />
                        {formik.touched.street && formik.errors.street ? <span className="error">{formik.errors.street}</span> : ""}
                    </label>
                    <span className="flex">
            <label className="label">
                <input className="formInput"
                       name="city"
                       placeholder="Miasto"
                       value={formik.values.city}
                       onChange={formik.handleChange} />
                {formik.touched.city && formik.errors.city ? <span className="error">{formik.errors.city}</span> : ""}
            </label>
            <label className="label">
                <input className="formInput"
                       name="postalCode"
                       placeholder="Kod pocztowy"
                       value={formik.values.postalCode}
                       onChange={formik.handleChange} />
                {formik.touched.postalCode && formik.errors.postalCode ? <span className="error">{formik.errors.postalCode}</span> : ""}
            </label>
        </span>
                    <label className="label">
                        <input className="formInput"
                               name="phoneNumber"
                               placeholder="Numer telefonu"
                               value={formik.values.phoneNumber}
                               onChange={formik.handleChange} />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? <span className="error">{formik.errors.phoneNumber}</span> : ""}
                    </label>
                </form>
            </section>

            <section className="addHotel__section">
                <h3 className="addHotel__section__header">
                    <span className="addHotel__section__header__circle">2</span>
                    <span className="addHotel__section__header__text">Dodaj zdjęcia</span>
                </h3>

                <div className="register__formContent center">

                </div>
            </section>

            <section className="addHotel__section">
                <h3 className="addHotel__section__header">
                    <span className="addHotel__section__header__circle">3</span>
                    <span className="addHotel__section__header__text">Dodaj obsługiwane zwierzęta</span>
                </h3>

                <div className="register__formContent register__formContent--petList center">
                    {petList?.map((item, index) => {
                        return <section className="addHotel__petList__item" key={index}>
                            <label className="addHotel__petList__item__label">
                                <button className={!item.selected ? "addHotel__petList__item__btn" : "addHotel__petList__item__btn addHotel__petList__item__btn--selected"}
                                    onClick={() => { toggleSelectPet(item.name); }}
                                >
                                    <span></span>
                                </button>
                                {item.name}
                            </label>
                            {item.selected ? <label className="addHotel__petList__item__priceLabel">
                                Cena za dobę:
                                <input className="input"
                                       placeholder="Cena"
                                       value={item.price}
                                       onChange={(e) => { changePrice(e.target.value, item.name); }} />
                                PLN
                            </label> : ""}
                        </section>
                    })}
                </div>
            </section>

            <button className="formSubmitBtn formSubmitBtn--addHotel">
                Dodaj hotel
            </button>
        </div>
        <Footer />
    </div>
};

export default AddHotel;
