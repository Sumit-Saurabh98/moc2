import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../Redux/actions';
import style from '../Styles/Login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get("https://moc2.onrender.com/users").then(res=>setUsers(res.data));
  },[])

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      dispatch(loginSuccess());
      navigate("/dashboard")
    } else {
      dispatch(loginFailure('Invalid email or password'));
      alert("wrong crendentials")
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className={style.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
