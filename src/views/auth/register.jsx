import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password_confirmation, setPasswordConfirmation] = useState('');
	const [errors, setErrors] = useState([]);
	const [message, setMessage] = useState('');

	const record = {
		name,
		email,
		password,
		password_confirmation,
	};
	async function store(e) {
		e.preventDefault();
		try {
			let response = await axios.post('/register', record);
			console.log(response.data);
			setName('');
			setEmail('');
			setPassword('');
			setPasswordConfirmation('');
		} catch (e) {
			setErrors(e.response.data.errors);
			setMessage(e.response.data.message);
		}
	}
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-5'>
					{ message ? <div className="alert alert-danger" role={'alert'}>{message}</div>
						: ''
					}
					<div className='card'>
						<div className='card-header'>Register</div>
						<div className='card-body'>
							<form onSubmit={store}>
								<div className='mb-3'>
									<label htmlFor='name' className='form-label'>Name</label>
									<input type='text' onChange={(e) => setName(e.target.value)} value={name} name='name' id='name' className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
									{
										errors.name ? <div className='invalid-feedback'>{errors.name[0]}</div> : ''	
									}
								</div>
								<div className='mb-3'>
									<label htmlFor='email' className='form-label'>Email</label>
									<input type='email' onChange={(e) => setEmail(e.target.value)} value={email} name='email' id='email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
									{
										errors.email ? <div className='invalid-feedback'>{errors.email[0]}</div> : ''	
									}
								</div>
								<div className='mb-3'>
									<label htmlFor='password' className='form-label'>Password</label>
									<input type='password' onChange={(e) => setPassword(e.target.value)} value={password} name='password' id='password' className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
									{
										errors.password ? <div className='invalid-feedback'>{errors.password[0]}</div> : ''	
									}
								</div>
								<div className='mb-3'>
									<label htmlFor='password_confirmation' className='form-label'>Confirm Password</label>
									<input type='password' onChange={(e) => setPasswordConfirmation(e.target.value)} value={password_confirmation} name='password_confirmation' id='password_confirmation' className='form-control'/>
								</div>
								<button type='submit' className='btn btn-primary'>Register</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
