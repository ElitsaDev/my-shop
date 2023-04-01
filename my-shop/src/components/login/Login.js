import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
export default function Login() {

    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    return (
        <section id="login" className={styles.container}>

            <article className={styles.narrow}>
                <header className={styles.header}>
                    <h1>Login</h1>
                </header>
                <form id="login-form" method="POST" className={styles["login-form"]} onSubmit={onSubmit}>
                    <div className={styles.error}>Email or Password are not valid.</div>
                    <label className={styles.label}>E-mail: </label>
                    <input type="text" 
                            name="email" 
                            placeholder="Enter your email" 
                            className={styles.input} 
                            value={values.email}
                            onChange={changeHandler}
                    />
                    <label className={styles.label}>Password:</label>
                    <input type="password" 
                            name="password" 
                            placeholder="Enter your password" 
                            className={styles.input} 
                            value={values.password}
                            onChange={changeHandler} 
                    />
                    <input className={styles.btn} type="submit" value="Sign In" />
                </form>
                <div className="pad-small">Don't have an account? <Link to="/register" className={styles.invert}>Sign up here</Link>
                </div>
            </article>
        </section>
    );
}

