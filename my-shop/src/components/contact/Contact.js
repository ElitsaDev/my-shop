import { useState } from "react";
import styles from "./Contact.module.css";
import { useForm } from '../../hooks/useForm';

export default function Contact({ onCreateContactSubmit }) {

    const { values, changeHandler, onSubmit } = useForm({
        name: '',
        email: '',
        message: '',
    }, onCreateContactSubmit);

    const [errors, setErrors] = useState({});

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
            {/* <!-- Map Begin --> */}
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111551.9926412813!2d-90.27317134641879!3d38.606612219170856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1597926938024!5m2!1sen!2sbd"
                    height="500" className="map" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Adress map"></iframe>
            </div>
            {/* <!-- Map End --> */}

            {/* <!-- Contact Section Begin --> */}
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__text">
                                <div className="section-title">
                                    <span>Information</span>
                                    <h2>Contact Us</h2>
                                    <p>As you might expect of a company that began as a high-end interiors contractor, we pay
                                        strict attention.</p>
                                </div>
                                <ul>
                                    <li>
                                        <h4>America</h4>
                                        <p>195 E Parker Square Dr, Parker, CO 801 <br />+43 982-314-0958</p>
                                    </li>
                                    <li>
                                        <h4>France</h4>
                                        <p>109 Avenue Léon, 63 Clermont-Ferrand <br />+12 345-423-9893</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__form">
                                <form onSubmit={onSubmit}
                                    method="POST"
                                    className={styles["contact-form"]}
                                >
                                    {errors.email &&
                                        <div className={styles.error}>Email is not in the right format.</div>
                                    }
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Name"
                                                value={values.name}
                                                onChange={changeHandler}
                                            />
                                        </div>

                                        <div className="col-lg-6">
                                            <input type="text"
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                value={values.email}
                                                onChange={changeHandler}
                                                onBlur={(e) => isEmail(e)}
                                            />

                                        </div>
                                        <div className="col-lg-12">
                                            <textarea type="text" className={styles.message}
                                                id="message"
                                                name="message"
                                                placeholder="Message"
                                                value={values.message}
                                                onChange={changeHandler}
                                                required
                                            />
                                            <button type="submit" disabled={!isFormValid} className="site-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Section End --> */}
        </>
    );
}