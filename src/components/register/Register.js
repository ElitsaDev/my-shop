import styles from "./Register.module.css"

export default function Register() {
    return (
        <>
            <section id="register"  className={styles.container}>
                <article className={styles.narrow}>
                    <header className={styles.header}>
                        <h1>Register</h1>
                    </header>
                    
                    <form id="register-form" className={styles["register-form"]}>
                            <div className={styles.error}>Email or Password are not valid.</div>
                            <label className={styles.label}>E-mail: </label> 
                            <input type="text" name="email"/> 
                            <label>Username: <input type="text" name="username"/></label> 
                            <label>Password: <input type="password" name="password"/></label> 
                            <label>Repeat: <input type="password" name="repass"/></label>
                            <input className="action cta" type="submit" value="Create Account"/>
                    </form>
                    
                    <footer className="pad-small">Already have an account? <a href="/login" className="invert">Sign in here</a>
                    </footer>
                </article>
            </section>
        </>
    );
}