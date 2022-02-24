import React from 'react';
import * as Yup from "yup";
import {useFormik} from "formik";

const MyAccountPersonalData = () => {
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('Uzupełnij swoje imię'),
        lastName: Yup.string()
            .required('Uzupełnij swoje nazwisko'),
        email: Yup.string()
            .email('To nie jest poprawny adres e-mail')
            .required('Wpisz swój adres e-mail'),
        password: Yup.string()
            .min(6, "Hasło musi mieć co najmniej 6 znaków długości")
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
            .required("Uzupełnij swój numer telefonu")
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: '',
            city: '',
            postalCode: '',
            street: '',
            phoneNumber: ''
        },
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <section className="myAccount__personalData">
        <form className="myAccount__personalData__form">
            <h2 className="smallHeader smallHeader--personalData">
                Dane podstawowe
            </h2>
            <span className="flex">
                    <label className="label">
                        <input className="formInput"
                               name="firstName"
                               placeholder="Imię"
                               value={formik.values.firstName}
                               onChange={formik.handleChange} />
                        {formik.touched.firstName && formik.errors.firstName ? <span className="error">{formik.errors.firstName}</span> : ""}
                    </label>
                    <label className="label">
                        <input className="formInput"
                               name="lastName"
                               placeholder="Nazwisko"
                               value={formik.values.lastName}
                               onChange={formik.handleChange} />
                        {formik.touched.lastName && formik.errors.lastName ? <span className="error">{formik.errors.lastName}</span> : ""}
                    </label>
                </span>
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
            <button className="formSubmitBtn">
                Zmień dane
            </button>
        </form>
    </section>
};

export default MyAccountPersonalData;
