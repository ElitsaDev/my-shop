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
                            <label className={styles.label}>Username: </label> 
                            <input type="text" name="username"/>
                            <label className={styles.label}>Password: </label> 
                            <input type="password" name="password"/>
                            <label className={styles.label}>Repeat password: </label> 
                            <input type="password" name="repass"/>
                            <input className={styles.btn} type="submit" value="Create Account"/>
                    </form>
                    
                    <div className="pad-small">Already have an account? <a href="/login" className="invert">Sign in here</a>
                    </div>
                </article>
            </section>
        </>
    );
}