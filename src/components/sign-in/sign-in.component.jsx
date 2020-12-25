import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

export class SignIn extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = e => {
		e.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { handleChange } = this;
		return (
			<div className='sign-in'>
				<h2 className='title'>Already have an account?</h2>
				<span>Sign in with your email and password.</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						handleChange={handleChange}
						required
						label='Email'
					/>
					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						handleChange={handleChange}
						required
						label='Password'
					/>
					<div className='buttonGrp'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Google Sign in
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
