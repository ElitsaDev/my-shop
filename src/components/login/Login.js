import styles from './Login.module.css';

export default function Login() {
    return (
        <section id="login" className={styles.container}>
            <article className={styles.narrow}>
                <header className={styles.header}>
                    <h1>Login</h1>
                </header>
                <form id="login-form" className={styles["login-form"]}>
                    <div className={styles.error}>Email or Password are not valid.</div>
                    <label className={styles.label}>E-mail: </label>
                    <input type="text" name="email" placeholder="Enter your email" className={styles.input} />
                    <label className={styles.label}>Password:</label>
                    <input type="password" name="password" placeholder="Enter your password" className={styles.input} />
                    <input className={styles.btn} type="submit" value="Sign In" />
                </form>
                <div className="pad-small">Don't have an account? <a href="/register" className="invert">Sign up here</a>
                </div>
            </article>
        </section>
    );
}

