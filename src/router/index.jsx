import React from 'react';
import About from '../views/About';
import Home from '../views/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar';
import Login from '../views/auth/login';
import Register from '../views/auth/register';
import Guest from '../middleware/Guest';
import Dashboard from '../views/Dashboard';
import Authenticated from '../middleware/Authenticated';

export default function Router() {
	return (
		<>
		<BrowserRouter>
			<Navbar/>
			<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route 
					path="/dashboard" 
					element={
					<Authenticated>
						<Dashboard/>
					</Authenticated>
					}/>
					<Route 
					path='/login' 
					element={
						<Guest>
							<Login/>
						</Guest>
					}/>
					<Route 
					path='/register'
					element={
						<Guest>
							<Register/>
						</Guest>
					}/>
			</Routes>
			</BrowserRouter>
		</>
	);
}
