import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authenticated } from '../store';

export default function Navbar() {
   const navigate = useNavigate()
	const [auth, setAuth]= useRecoilState(authenticated)
	const logout = async ()=>{
		try{
		await axios.post('logout')
		setAuth({check:false})
		localStorage.removeItem('tokenUser')
		navigate('/login')
		}catch(e){
			console.log(e)
		}
	}
	
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-white border-bottom py-3'>
			<div className='container-fluid'>
				<NavLink className='navbar-brand' to='/'>
					Mention
				</NavLink>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<NavLink className='nav-link' to="/">
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to="about">
								About
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to="dashboard">
								Dashboard
							</NavLink>
						</li>
					</ul>

					{
						auth.check ? 
						<ul className='navbar-nav mb-2 mb-lg-0'>
							<li className='nav-item'>
								<NavLink className='nav-link' to='#'>
									{auth.user.name}
								</NavLink>
							</li>
							<li className='nav-item'>
								<button className='nav-link btn' onClick={logout}>
									Logout
								</button>
							</li>
						</ul>
						:
						<ul className='navbar-nav mb-2 mb-lg-0'>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/login'>
								Login
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/register'>
								Register
							</NavLink>
						</li>
					</ul>
					}
				</div>
			</div>
		</nav>
	);
}
