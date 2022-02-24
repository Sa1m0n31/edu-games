import React from 'react';
import * as Yup from "yup";
import {useFormik} from "formik";
import Header from "../components/Header";
import undraw1 from '../static/img/undraw-2.svg'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInfo } from '../redux/loggedUserInfo';

const LoginPage = () => {

    const dispach = useDispatch(); //redux

    const navigate = useNavigate(); //redirect

    const [unsuccessfulLogin, setUnsuccessfulLogin] = useState('');

    const validationSchema = Yup.object({
        username: Yup.string()
            .email('To nie jest poprawny adres e-mail')
            .required('Wpisz swój adres e-mail'),
        password: Yup.string()
            .min(4, "Hasło musi mieć co najmniej 4 znaki długości")
            .required("Wpisz swoje hasło")
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema,
        onSubmit: values => {

            const api = axios.create();

            api.post('/login', values).then( res => { //succesful login

                dispach(setInfo({username: values.username, role: res.data})) //redux set user info
                navigate('/');
            })
            .catch( err => { //unsuccesfull login

                setUnsuccessfulLogin('Email lub hasło niepoprawne');
                formik.setFieldValue('password', '', false);
            })
        },
    });

    return <div className="container">
        <Header />
        <main className="register w register--login flex">
            <figure className="register__imgWrapper">
                <img className="btn__img" src={undraw1} alt="zarejestruj-sie" />
            </figure>
            <form className="register__form center"
                  onSubmit={formik.handleSubmit}
            >
                <h2 className="register__header">
                    Zaloguj się
                </h2>
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
                <button type='submit' className="formSubmitBtn">
                    Zaloguj się
                </button>

                <div className="afterFormButtons flex">
                    <a className="underlineLink" href="/przypomnij-haslo">
                        Przypomnij mi hasło
                    </a>
                    <a className="underlineLink" href="/zarejestruj-sie">
                        Zarejestruj się
                    </a>
                </div>
            </form>
        </main>
    </div>
};

export default LoginPage;
