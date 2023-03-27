import styles from "./Register.module.css"
import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onRepassChange = (e) => {
        setRepass(e.target.value);
    };

    return (
        <>
            <section id="register" className={styles.container}>
                <article className={styles.narrow}>
                    <header className={styles.header}>
                        <h1>Register</h1>
                    </header>

                    <form id="register-form"
                        className={styles["register-form"]}
                        onSubmit={onSubmitHandler}
                    >
                        <div className={styles.error}>Email or Password are not valid.</div>
                        <label className={styles.label}>E-mail: </label>
                        <input
                            type="text"
                            name="email"
                            className={styles.input}
                            value={email}
                            onChange={onEmailChange}
                        />
                        <label className={styles.label}>Username: </label>
                        <input
                            type="text"
                            name="username"
                            className={styles.input}
                            value={username}
                            onChange={onUsernameChange}
                        />
                        <label className={styles.label}>Password: </label>
                        <input
                            type="password"
                            name="password"
                            className={styles.input}
                            value={password}
                            onChange={onPasswordChange}
                        />
                        <label className={styles.label}>Repeat password: </label>
                        <input
                            type="password"
                            name="repass"
                            className={styles.input}
                            value={repass}
                            onChange={onRepassChange}
                        />
                        <input className={styles.btn} type="submit" value="Create Account" />
                    </form>

                    <div className="pad-small">Already have an account? <a href="/login" className="invert">Sign in here</a>
                    </div>
                </article>
            </section>
        </>
    );
}