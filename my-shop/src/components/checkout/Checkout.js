import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

export default function Checkout() {
    const [account, setAccount] = useState('');
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        country: '',
        streetAddress: '',
        apartmentType: '',
        town: '',
        state: '',
        postCode: '',
        phone: '',
        email: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        country: '',
        streetAddress: '',
        apartmentType: '',
        town: '',
        state: '',
        postCode: '',
        phone: '',
        email: '',
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onCreateAccountHandler = (e) => {
        console.log(`${e.target.value}=${e.target.checked}`);
        setAccount(state => ({ ...state, [e.target.value]: e.target.checked }));
    };

    const onCreateNodeHandler = (e) => {
        console.log(`${e.target.value}=${e.target.checked}`);
        setAccount(state => ({ ...state, [e.target.value]: e.target.checked }));
    };
    
    const formValidate = (e) => {
        console.log('asdasd');
        const value = e.target.value;
        const errors = {};

        if (e.target.name === 'firstName' && (value.length < 3 || value.length > 20)) {
            errors.firstName = 'First name should be between 3 and 20 characters';
        }

        if (e.target.name === 'lastName' && (value.length < 3 || value.length > 20)) {
            errors.lastName = 'Last name should be between 3 and 20 characters';
        }

        if (e.target.name === 'country' && (value.length < 3 || value.length > 20)) {
            errors.lastName = 'Country name should be more than 3 characters long';
        }
        setFormErrors(errors);
    };

    return (
        <>
            {/* <!-- Breadcrumb Section Begin --> */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Check Out</h4>
                                <div className="breadcrumb__links">
                                    <Link to="/">Home</Link>
                                    <Link to="/shop">Shop</Link>
                                    <span>Check Out</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Section End --> */}

            {/* <!-- Checkout Section Begin --> */}
            <section className="checkout spad">
                <div className="container">
                    <div className={styles["checkout-form"]}>
                        <form onSubmit={onSubmitHandler}  >
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    {/* <h6 className="coupon__code"><span className="icon_tag_alt"></span> Have a coupon? <Link to="#">Click
                                here</Link> to enter your code</h6> */}
                                    <h6 className="checkout__title">Billing Details</h6>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Fist Name<span>*</span></p>
                                                <input type="text"
                                                    name="firstName"
                                                    value={values.firstName}
                                                    onChange={onChangeHandler}
                                                    onBlur={formValidate}
                                                    style={formErrors.firstName ? { borderColor: "red" } : {}}
                                                />
                                            </div>
                                            {formErrors.firstName &&
                                                <p className="form-error">
                                                    {formErrors.firstName}
                                                </p>
                                            }
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Last Name<span>*</span></p>
                                                <input type="text"
                                                    name="lastName"
                                                    value={values.lastName}
                                                    onChange={onChangeHandler}
                                                    onBlur={formValidate}
                                                    style={formErrors.lastName ? { borderColor: "red" } : {}}
                                                />
                                            </div>
                                            {formErrors.lastName &&
                                                <p className="form-error">
                                                    {formErrors.lastName}
                                                </p>
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="checkout__input">
                                                <p>Country<span>*</span></p>
                                                <input type="text"
                                                    name="country"
                                                    value={values.country}
                                                    onChange={onChangeHandler}
                                                    onBlur={formValidate}
                                                    style={formErrors.country ? { borderColor: "red" } : {}}
                                                />

                                            </div>
                                            {formErrors.country &&
                                                <p className="form-error">
                                                    {formErrors.country}
                                                </p>
                                            }
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Address<span>*</span></p>
                                        <input type="text"
                                            placeholder="Street Address"
                                            className="checkout__input__add"
                                            name="streetAddress"
                                            value={values.streetAddress}
                                            onChange={onChangeHandler}
                                            onBlur={formValidate}
                                            style={formErrors.streetAddress ? { borderColor: "red" } : {}}
                                        />
                                        <input type="text"
                                            placeholder="Apartment, suite, unite ect (optinal)"
                                            name="apartmentType"
                                            value={values.apartmentType}
                                            onChange={onChangeHandler}
                                            onBlur={formValidate}
                                            style={formErrors.apartmentType ? { borderColor: "red" } : {}}
                                        />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Town/City<span>*</span></p>
                                        <input type="text"
                                            name="town"
                                            value={values.town}
                                            onChange={onChangeHandler}
                                            onBlur={formValidate}
                                            style={formErrors.town ? { borderColor: "red" } : {}}
                                        />
                                    </div>
                                    <div className="checkout__input">
                                        <p>State<span>*</span></p>
                                        <input type="text"
                                            name="state"
                                            value={values.state}
                                            onChange={onChangeHandler}
                                            onBlur={formValidate}
                                            style={formErrors.state ? { borderColor: "red" } : {}}
                                        />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Postcode / ZIP<span>*</span></p>
                                        <input type="text"
                                            name="postCode"
                                            value={values.postCode}
                                            onChange={onChangeHandler}
                                            onBlur={formValidate}
                                            style={formErrors.postCode ? { borderColor: "red" } : {}}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Phone<span>*</span></p>
                                                <input type="text"
                                                    name="phone"
                                                    value={values.phone}
                                                    onChange={onChangeHandler}
                                                    onBlur={formValidate}
                                                    style={formErrors.phone ? { borderColor: "red" } : {}}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="text"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={onChangeHandler}
                                                    onBlur={formValidate}
                                                    style={formErrors.email ? { borderColor: "red" } : {}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* todo name  */}
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="acc">
                                            Create an account?
                                            <input type="checkbox" id="acc" name="account" value="createAccount" onChange={onCreateAccountHandler} checked={account['createAccount'] || false} />
                                            <span className="checkmark"></span>
                                        </label>
                                        <p>Create an account by entering the information below. If you are a returning customer
                                            please login at the top of the page</p>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Account Password<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="diff-acc">
                                            Note about your order, e.g, special noe for delivery
                                            <input type="checkbox" id="diff-acc" name="account" value="node" onChange={onCreateNodeHandler} checked={account['node'] || false} />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Order notes<span>*</span></p>
                                        <input type="text"
                                            placeholder="Notes about your order, e.g. special notes for delivery." />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4 className="order__title">Your order</h4>
                                        <div className="checkout__order__products">Product <span>Total</span></div>
                                        <ul className="checkout__total__products">
                                            <li>01. Vanilla salted caramel <span>$ 300.0</span></li>
                                            <li>02. German chocolate <span>$ 170.0</span></li>
                                            <li>03. Sweet autumn <span>$ 170.0</span></li>
                                            <li>04. Cluten free mini dozen <span>$ 110.0</span></li>
                                        </ul>
                                        <ul className="checkout__total__all">
                                            <li>Subtotal <span>$750.99</span></li>
                                            <li>Total <span>$750.99</span></li>
                                        </ul>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="acc-or">
                                                Create an account?
                                                <input type="checkbox" id="acc-or" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.</p>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="payment">
                                                Check Payment
                                                <input type="checkbox" id="payment" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="paypal">
                                                Paypal
                                                <input type="checkbox" id="paypal" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <button type="submit" className="site-btn">PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}