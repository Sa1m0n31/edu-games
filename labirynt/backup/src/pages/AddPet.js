import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import registerImg from "../static/img/undraw-3.svg";
import * as Yup from "yup";
import {useFormik} from "formik";

const AddPet = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Wpisz imię zwierzaka'),
        weight: Yup.number()
            .min(0, "Zwierzak nie może ważyć mniej niż 1kg")
            .required("Wpisz wagę zwierzaka")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            weight: '',
            dateOfBirth: '',
            info: ''
        },
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <div className="container container--addPet">
            <Header loggedIn={true} />
            <h1 className="pageHeader">
                Dodaj zwierzaka
            </h1>
            <main className="register register--login w flex">
                <figure className="register__imgWrapper">
                    <img className="btn__img" src={registerImg} alt="zarejestruj-sie" />
                </figure>
                <form className="addPetForm" onSubmit={formik.handleSubmit}>
                    <label className="addPet__label flex">
                        Typ zwierzaka
                        <select>
                            <option>Pies</option>
                            <option>Kot</option>
                            <option>Chomik</option>
                            <option>Świnka morska</option>
                        </select>
                    </label>
                    <label className="addPet__label flex">
                        Imię
                        <input className="addPet__input"
                               placeholder="Imię"
                               name="name"
                               value={formik.values.name}
                               onChange={formik.handleChange} />
                        {formik.touched.name && formik.errors.name ? <span className="error">{formik.errors.name}</span> : ""}
                    </label>
                    <label className="addPet__label flex">
                        Waga
                        <input className="addPet__input"
                               placeholder="Waga"
                               name="weight"
                               type="number"
                               value={formik.values.weight}
                               onChange={formik.handleChange} />
                        {formik.touched.weight && formik.errors.weight ? <span className="error">{formik.errors.weight}</span> : ""}
                    </label>
                    <label className="addPet__label flex">
                        Data urodzenia
                        <input className="addPet__input"
                               placeholder="Imię"
                               name="name"
                               type="date"
                               value={formik.values.dateOfBirth}
                               onChange={formik.handleChange} />
                        {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? <span className="error">{formik.errors.dateOfBirth}</span> : ""}
                    </label>
                    <label className="addPet__label flex">
                        Dodatkowe informacje
                        <textarea className="addPet__input"
                               placeholder="Dodatkowe informacje"
                               name="info"
                               value={formik.values.info}
                               onChange={formik.handleChange} />
                    </label>
                    <button className="formSubmitBtn">
                        Dodaj zwierzaka
                    </button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default AddPet;
