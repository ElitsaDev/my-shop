import { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from "./Register.module.css"
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
export default function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        repass: '',
    }, onRegisterSubmit);

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
                        {/* <div className={styles.error}>Email or Password are not valid.</div> */}
                        <label className={styles.label}>E-mail: </label>
                        {errors.email &&
                            <span className={styles.error}>Email is not valid!</span>
                        }
                        <input
                            type="text"
                            name="email"
                            className={styles.input}
                            value={values.email}
                            onChange={changeHandler}
                            onBlur={(e) => isEmail(e)}
                        />
                        
                        <label className={styles.label}>Username: </label>
                        {errors.username &&
                            <span className={styles.error}>Username must be at least 3 characters long!</span>
                        }
                        <input
                            type="text"
                            name="username"
                            className={styles.input}
                            value={values.username}
                            onChange={changeHandler}
                            onBlur={(e) => minLength(e, 3)}
                        />
                        <label className={styles.label}>Password: </label>
                        {errors.password &&
                            <span className={styles.error}>Password must be at least 3 characters long!</span>
                        }
                        <input
                            type="password"
                            name="password"
                            className={styles.input}
                            value={values.password}
                            onChange={changeHandler}
                            onBlur={(e) => minLength(e, 3)}
                        />
                        <label className={styles.label}>Repeat password: </label>
                        {errors.repass &&
                            <span className={styles.error}>Password must be at least 3 characters long!</span>
                        }
                        <input
                            type="password"
                            name="repass"
                            className={styles.input}
                            value={values.repass}
                            onChange={changeHandler}
                            onBlur={(e) => minLength(e, 3)}
                        />
                        <input className={styles.btn} type="submit" disabled={!isFormValid} value="Create Account" />
                    </form>

                    <div className="pad-small">Already have an account? <Link to="/login" className={styles.invert}>Sign in here</Link>
                    </div>
                </article>
            </section>
        </>
    );
}