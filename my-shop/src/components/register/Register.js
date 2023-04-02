import { useContext } from 'react';
import styles from "./Register.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';

export default function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        repass: '',
    }, onRegisterSubmit);

    return (
        <>
            <section id="register" className={styles.container}>
                <article className={styles.narrow}>
                    <header className={styles.header}>
                        <h1>Register</h1>
                    </header>

                    <form id="register-form"
                        method="POST"
                        className={styles["register-form"]}
                        onSubmit={onSubmit}
                    >
                        <div className={styles.error}>Email or Password are not valid.</div>
                        <label className={styles.label}>E-mail: </label>
                        <input
                            type="text"
                            name="email"
                            className={styles.input}
                            value={values.email}
                            onChange={changeHandler}
                        />
                        <label className={styles.label}>Username: </label>
                        <input
                            type="text"
                            name="username"
                            className={styles.input}
                            value={values.username}
                            onChange={changeHandler}
                        />
                        <label className={styles.label}>Password: </label>
                        <input
                            type="password"
                            name="password"
                            className={styles.input}
                            value={values.password}
                            onChange={changeHandler}
                        />
                        <label className={styles.label}>Repeat password: </label>
                        <input
                            type="password"
                            name="repass"
                            className={styles.input}
                            value={values.repass}
                            onChange={changeHandler}
                        />
                        <input className={styles.btn} type="submit" value="Create Account" />
                    </form>

                    <div className="pad-small">Already have an account? <Link to="/login" className={styles.invert}>Sign in here</Link>
                    </div>
                </article>
            </section>
        </>
    );
}