import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from "recoil";
import { authenticated } from "../../store";

export default function Login() {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authenticated)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const credentials = {
    email, password
  }

  const login = async (e) => {
    e.preventDefault();
    try{
      let response = await axios.post('/login', credentials)
      localStorage.setItem('tokenUser', response.data.token)
      setAuth({
        check: true,
        user: response.data.data
      })
      navigate('/')
    }catch(err) {
      setErrors(err.response.data.errors)
      console.log(err.response.data.errors)
    }
   
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-header">
              <div className="card-body">
                <form onSubmit={login}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" onChange= {(e) => setEmail(e.target.value)} value={email} name="email" id="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                    {
                      errors.email ? <div className="invalid-feedback">{errors.email[0]}</div> : ''
                    }
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" onChange= {(e) => setPassword(e.target.value)} value={password} name="password" id="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    {
                      errors.password ? <div className="invalid-feedback">{errors.password[0]}</div> : ''
                    }
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
