import { Button, Input } from "antd"
import { useFormik } from "formik"
import React, { useEffect, useState } from "react"
import { Navigate, redirect, useNavigate } from "react-router-dom"
import { LoginAPI } from "./Api"
import styles from './Auth.module.css'


const AuthPage = (props) => {
    let navigate = useNavigate()
    let [login, setLogin] = useState(false)
    useEffect(() => {
        if(login === true) {
            navigate('home')
        }
    }, [login])
    let LoginF = async (email, password) => {
        let status = await LoginAPI(email, password)
        if(status === 200) {
            setLogin(true)
        }
    }
    const LoginForm = () => {
        const formik = useFormik({
            initialValues: {
                email: '',
                password: ''
            },
            onSubmit: (values, { resetForm }) => {
                console.log(values.email)
                LoginF(values.email, values.password)
            },
        })
        return <form onSubmit={formik.handleSubmit}>
            <div className={styles.login_form}>
            <Input
                className={styles.input}
                placeholder='Введите email'
                id="email"
                name='email'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.login}
            ></Input>
            <Input
                className={styles.input}
                placeholder='Введите пароль'
                id="password"
                name='password'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.password}
            ></Input>
            <button type='submit' onClick={LoginF}>Войти</button>
            </div>
        </form>
    }
    return <div className={styles.auth_page}>
        <div className={styles.auth_form}>
            <LoginForm />
        </div>
    </div>
}

export default AuthPage
