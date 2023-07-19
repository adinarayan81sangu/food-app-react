
import { useFormContext } from 'react-hook-form'

import { useEffect, useState } from "react";


const Datastore = () => {
    const phonePatter = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,9}$/;
    const emailpattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    const passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
    const [passwordType, setPasswordType] = useState('password');
    const [showPassword, setShowPassword] = useState(false);


    const { formState: { errors }, getValues, register } = useFormContext();

    useEffect(() => {
        if (showPassword) {
            setPasswordType('text');
            return;
        }
        setPasswordType('password')
    }, [showPassword])
    return (
        <>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    {...register('username', {
                        required: 'user name is required*',
                        minLength: {
                            value: 3,
                            message: "username shouldn't be less than 3 characters*"
                        }
                    })}
                    className="form-control"
                />
                {errors.username && (<span className="error">{errors.username?.message?.toString()}</span>)}
            </div>
            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    {...register('age', {
                        required: 'age is required*',
                        validate: {
                            checkAge: (value) => {
                                return value >= 18 || 'Age contain more than 18';

                            }
                        }
                    })}
                    className="form-control"
                />
                {errors.age && (<span className="error">{errors.age?.message?.toString()}</span>)}
            </div>
            {/* <div className="form-group">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						name="date"
						className="form-control"
					/>
				</div> */}
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="text"
                    {...register('phonenumber', {
                        required: 'phone number is required*',
                        pattern: {
                            value: phonePatter,
                            message: 'please enter valid phonenumber*'
                        }
                    })}
                    className="form-control"
                />
                {errors.phonenumber && (<span className="error">{errors.phonenumber?.message?.toString()}</span>)}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    {...register('email', {
                        required: 'email is required*',
                        pattern: {
                            value: emailpattern,
                            message: 'Enter valid email*'
                        }
                    })}
                    className="form-control"
                />
                {errors.email && (<span className="error">{errors.email?.message?.toString()}</span>)}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type={passwordType}
                    {...register('password', {
                        required: 'password is required*',
                        pattern: {
                            value: passwordpattern,
                            message: 'the password should at least contain 1 upcase letter,1 lowercase letter, 1 special character && 1 number && min lenght 8 && Max length of password 16'
                        }
                    })}
                    className="form-control"
                />
                {errors.password && (<span className="error">{errors.password?.message?.toString()}</span>)}
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type={passwordType}
                    {...register('confirmPassword', {
                        required: 'confirm password is required*',
                        validate: {
                            checkPasswordConfirmationHandler: (value) => {
                                const { password } = getValues();
                                return password === value || "Passwords don't match";
                            },
                        },
                    })}
                    className="form-control"
                />
                {errors.confirmPassword && (<span className="error">{errors.confirmPassword?.message?.toString()}</span>)}
            </div>
            <div className="form-group">
                <input
                    name="passType"
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword((prevPass) => !prevPass)}
                />
                <label htmlFor="passType">
                    {showPassword ? 'hide password' : 'show password'}
                </label>
            </div>
        </>
    )
};
export default Datastore;