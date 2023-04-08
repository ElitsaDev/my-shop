import { Link } from "react-router-dom";
import styles from "./Error404.module.css";

export default function Error404() {
    return (
        <section className="x-container wpb_row">
            <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1531353826977-0941b4779a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`, backgroundRepeat: 'no-repeat', width: '100%', height: '750px', opacity: 0.9 }}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Oh no, you're found our junior Web developer homepage </h2>
                    <h5>Despite sleepping on the couch most of the day, she still finds time to do some coding...</h5>
                    <Link to={"/"}>Back to Home page <i className="fa fa-angle-right inc qtybtn" ></i></Link>
                </div>
            </div>
        </section>
    );
}