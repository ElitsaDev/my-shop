import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import styles from './BlogDetails.module.css';

export default function AddComment({ onCreateCommentSubmit }) {
    const [errors, setErrors] = useState({});
    const { values, changeHandler, onSubmit } = useForm({
        name: '',
        email: '',
        comment: '',
    }, onCreateCommentSubmit);

    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < bound,
        }));
    };

    const isEmail = (e) => {
        let email = e.target.value;
        console.log(email)
        const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
        let regExpresion = new RegExp(EMAIL_PATTERN);

        setErrors(state => ({
            ...state,
            [e.target.name]: !regExpresion.test(email),
        }));
    };

    const isFormValid = !Object.values(errors).some(x => x);

    return (
        <>
            <h4>Leave A Comment</h4>
            <form action="POST" onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        {errors.name &&
                            <div className={styles.error}>Name must be min 3 character long.</div>
                        }
                        <input type="text"
                            placeholder="Name"
                            name="name"
                            value={values.name}
                            onChange={changeHandler}
                            onBlur={(e) => minLength(e, 3)}
                        />
                        {errors.email &&
                            <div className={styles.error}>Email is not in the right format.</div>
                        }
                        <input type="text"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={changeHandler}
                            onBlur={(e) => isEmail(e)}
                        />

                    </div>

                    <div className="col-lg-6 text-center">
                        <textarea
                            placeholder="Comment"
                            required
                            name="comment"
                            value={values.comment}
                            onChange={changeHandler}
                        />

                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <button type="submit" disabled={!isFormValid} className="site-btn" >Post Comment</button>
                </div>
            </form>
        </>
    );
}