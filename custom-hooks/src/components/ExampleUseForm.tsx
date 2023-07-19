// import { useState } from "react";


// import { useEffect, useState } from 'react';
import './ExampleUseForm.scss'
import { useForm, FormProvider } from "react-hook-form";
import Datastore from './Datastore';
import { Link } from 'react-router-dom';

interface IFormInput {
  username: string,
  age: number,
  phonenumber: number,
  email: string,
  password: string,
  confirmPassword: string
}
const ExampleUseForm = () => {
  // const [userName, setUserName] = useState('');
  // const [age, setAge] = useState('');
  // const [phoneNumber,setPhoneNumber]=useState('')
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log({
  //     userName,
  //     age,
  //     email,
  //     password,
  //     confirmPassword,
  //   });
  // };
  // return <>
  //   <form onSubmit={handleSubmit}>
  //     <div className="form-group">
  //       <label htmlFor="username">Username</label>
  //       <input
  //         type="text"
  //         name="username"
  //         onChange={(e) => setUserName(e.target.value)}
  //         value={userName}
  //         className="form-control"
  //       />
  //     </div>
  //     <div className="form-group">
  //       <label htmlFor="age">Age</label>
  //       <input
  //         type="number"
  //         name="age"
  //         onChange={(e) => setAge(e.target.value)}
  //         value={age}
  //         className="form-control"
  //       />
  //     </div>
  //     <div className="form-group">
  //       <label htmlFor="email">Phone Number</label>
  //       <input
  //         type="number"
  //         name="email"
  //         onChange={(e) => setPhoneNumber(e.target.value)}
  //         value={phoneNumber}
  //         className="form-control"
  //       />
  //     </div>
  //     <div className="form-group">
  //       <label htmlFor="email">Email</label>
  //       <input
  //         type="text"
  //         name="email"
  //         onChange={(e) => setEmail(e.target.value)}
  //         value={email}
  //         className="form-control"
  //       />
  //     </div>
  //     <div className="form-group">
  //       <label htmlFor="password">Password</label>
  //       <input
  //         type="password"
  //         name="password"
  //         onChange={(e) => setPassword(e.target.value)}
  //         value={password}
  //         className="form-control"
  //       />
  //     </div>
  //     <div className="form-group">
  //       <label htmlFor="confirmPassword">Confirm Password</label>
  //       <input
  //         type="password"
  //         name="confirmPassword"
  //         onChange={(e) => setConfirmPassword(e.target.value)}
  //         value={confirmPassword}
  //         className="form-control"
  //       />
  //     </div>
  //     <div className="form-group">
  //       <input
  //         name="passType"
  //         type="checkbox"
  //         // checked={showPass}
  //         // onChange={() => setShowPass((prev) => !prev)}
  //       />
  //       <label htmlFor="passType">
  //         {/* {showPass ? 'hide password' : 'show password'} */}Show Passwor
  //       </label>
  //     </div>
  //     <button type="submit">submit</button>
  //   </form>
  // </>

  const methods = useForm();
  const { reset } = useForm<IFormInput>({
    mode: 'onTouched'
  });

  const registerHandler = (data: any) => {
    console.log(data);
    // reset();

  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(registerHandler)}>
          <Datastore />
           <button type="submit" ><Link to={`display`}>Submit</Link></button>
        </form>
      </FormProvider>
    </>
  )
};
export default ExampleUseForm;