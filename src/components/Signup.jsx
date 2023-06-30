import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpSuccess} from '../Redux/actions';
import style from '../Styles/Signup.module.css';
import axios from "axios"

function Signup() {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    const userData = {
      fullName,
      email,
      password
    };

    axios.post("https://moc2.onrender.com/users",userData)

    dispatch(signUpSuccess(userData));

    setFullName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={style.signupContainer}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div className={style.formGroup}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={style.signupButton}>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
