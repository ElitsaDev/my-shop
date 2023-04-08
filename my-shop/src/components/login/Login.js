import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';

export default function Login() {

    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    const [errors, setErrors] = useState({});

    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < bound,
        }));
    }
    const isEmail = (e) => {
        let email = e.target.value;
        console.log(email)
        const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
        let regExpresion = new RegExp(EMAIL_PATTERN);

        setErrors(state => ({
            ...state,
            [e.target.name]: !regExpresion.test(email),
        }));
    }

    const isFormValid = !Object.values(errors).some(x => x);

    return (
        <section id="login" className={styles.container}>

            <article className={styles.narrow}>
                <header className={styles.header}>
                    <h1>Login</h1>
                </header>
                <form id="login-form"
                    method="POST"
                    className={styles["login-form"]}
                    onSubmit={onSubmit}
                >
                    {(errors.email || errors.password) &&
                        <div className={styles.error}>Email or Password are not valid.</div>
                    }

                    <label className={styles.label}>E-mail: </label>
                    <input type="text"
                        name="email"
                        placeholder="Enter your email"
                        className={styles.input}
                        value={values.email}
                        onChange={changeHandler}
                        onBlur={(e) => isEmail(e)}
                    />
                    <label className={styles.label}>Password:</label>
                    <input type="password"
                        name="password"
                        placeholder="Enter your password"
                        className={styles.input}
                        value={values.password}
                        onChange={changeHandler}
                        onBlur={(e) => minLength(e, 3)}
                    />
                    <input className={styles.btn} type="submit" disabled={!isFormValid} value="Sign In" />
                </form>
                <div className="pad-small">Don't have an account? <Link to="/register" className={styles.invert}>Sign up here</Link>
                </div>
            </article>
        </section>
    );
}

