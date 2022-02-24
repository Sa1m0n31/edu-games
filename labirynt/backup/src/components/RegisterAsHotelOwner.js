import React from 'react';
import * as Yup from "yup";
import {useFormik} from "formik";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInfo } from '../redux/loggedUserInfo';
import { useState } from 'react';
import axios from 'axios';

const RegisterAsHotelOwner = () => {

    const dispach = useDispatch(); //redux

    const navigate = useNavigate(); //redirect

    const [unsuccessfulLogin, setUnsuccessfulLogin] = useState('');

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('Uzupełnij swoje imię'),
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
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            repeatPassword: '',
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

                username: values.username,
                password: values.password,
                enabled: true,
                authority: 'ROLE_USER',
                firstName: values.firstName,
                lastName: values.lastName,
                street: values.street,
                zipcode: values.postalCode, 
                city: values.city,
                phoneNumber: values.phoneNumber,
                name: values.companyName,
                nip: values.nip,
                regon: values.regon,
            } , {withCredentials: true})
            .then( res => {
                
                api.post('/login', {username: values.username, password: values.password}, {withCredentials: true}); //get token
                dispach(setInfo({username: res.data.username, role: res.data.authority})); //redux set user info
                navigate('/');
            })
            .catch( err => { //unsuccesfull login
                
                setUnsuccessfulLogin('Nazwa użytkownika jest już zajęta');
                formik.setFieldValue('password', '', false);
                formik.setFieldValue('repeatPassword', '', false);
            })

        },
    });

    return <form className="register__formContent center"
                 onSubmit={formik.handleSubmit}
    >
        <p style={{color: "red"}} >{unsuccessfulLogin}</p> {/*unsuccessful login message*/}
        <label className="label">
            <input className="formInput"
                   name="username"
                   placeholder="Adres e-mail"
                   value={formik.values.username}
                   onChange={formik.handleChange} />
            {formik.touched.username && formik.errors.username ? <span className="error">{formik.errors.username}</span> : ""}
        </label>
        <label className="label">
            <input className="formInput"
                   name="password"
                   placeholder="Hasło"
                   type="password"
                   value={formik.values.password}
                   onChange={formik.handleChange} />
            {formik.touched.password && formik.errors.password ? <span className="error">{formik.errors.password}</span> : ""}
        </label>
        <label className="label">
            <input className="formInput"
                   name="repeatPassword"
                   type="password"
                   placeholder="Powtórz hasło"
                   value={formik.values.repeatPassword}
                   onChange={formik.handleChange} />
            {formik.touched.repeatPassword && formik.errors.repeatPassword ? <span className="error">{formik.errors.repeatPassword}</span> : ""}
        </label>
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
        <label className="label">
            <input className="formInput"
                   name="companyName"
                   placeholder="Nazwa firmy"
                   value={formik.values.companyName}
                   onChange={formik.handleChange} />
            {formik.touched.companyName && formik.errors.companyName ? <span className="error">{formik.errors.companyName}</span> : ""}
        </label>
        <label className="label">
            <input className="formInput"
                   name="nip"
                   placeholder="NIP"
                   value={formik.values.nip}
                   onChange={formik.handleChange} />
            {formik.touched.nip && formik.errors.nip ? <span className="error">{formik.errors.nip}</span> : ""}
        </label>
        <label className="label">
            <input className="formInput"
                   name="regon"
                   placeholder="REGON"
                   value={formik.values.regon}
                   onChange={formik.handleChange} />
            {formik.touched.regon && formik.errors.regon ? <span className="error">{formik.errors.regon}</span> : ""}
        </label>
        <button className="formSubmitBtn">
            Zarejestruj się
        </button>
    </form>
};

export default RegisterAsHotelOwner;
