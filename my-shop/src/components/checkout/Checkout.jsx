import { useState } from "react";

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
    }

    const onCreateNodeHandler = (e) => {
        console.log(`${e.target.value}=${e.target.checked}`);
        setAccount(state => ({ ...state, [e.target.value]: e.target.checked }));
    }
//TODO validate form
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
            errors.lastName = 'Country name should be between 3 and 20 characters';
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
                                    <a href="./index.html">Home</a>
                                    <a href="./shop.html">Shop</a>
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
                    <div className="checkout__form">
                        <form onSubmit={onSubmitHandler} >
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    {/* <h6 className="coupon__code"><span className="icon_tag_alt"></span> Have a coupon? <a href="#">Click
                                here</a> to enter your code</h6> */}
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
                                                    style={formErrors.firstName ? {borderColor: "red"} : {}}
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
                                                    style={formErrors.lastName ? {borderColor: "red"} : {}}
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
                                                    style={formErrors.country ? {borderColor: "red"} : {}} 
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
                                            style={formErrors.streetAddress ? {borderColor: "red"} : {}} 
                                        />
                                        <input type="text"
                                            placeholder="Apartment, suite, unite ect (optinal)"
                                            name="apartmentType"
                                            value={values.apartmentType}
                                            onChange={onChangeHandler}
                                            onBlur={formValidate}
                                            style={formErrors.apartmentType ? {borderColor: "red"} : {}} 
                                        />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Town/City<span>*</span></p>
                                        <input type="text" 
                                            name="town" 
                                            value={values.town} 
                                            onChange={onChangeHandler} 
                                            onBlur={formValidate}
                                            style={formErrors.town ? {borderColor: "red"} : {}}
                                        />
                                    </div>
                                    <div className="checkout__input">
                                        <p>State<span>*</span></p>
                                        <input type="text" 
                                        name="state" 
                                        value={values.state} 
                                        onChange={onChangeHandler} 
                                        onBlur={formValidate}
                                        style={formErrors.state ? {borderColor: "red"} : {}}
                                    />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Postcode / ZIP<span>*</span></p>
                                        <input type="text" 
                                        name="postCode" 
                                        value={values.postCode} 
                                        onChange={onChangeHandler} 
                                        onBlur={formValidate}
                                        style={formErrors.postCode ? {borderColor: "red"} : {}}
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
                                                style={formErrors.phone ? {borderColor: "red"} : {}}
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
                                                style={formErrors.email ? {borderColor: "red"} : {}}
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
                                    <div className="checkout__input"