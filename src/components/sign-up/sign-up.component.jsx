import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { handleChange } = this;
		return (
			<div className='sign-up'>
				<h2 className='title'>Don't have an account?</h2>
				<span>Sign up with your email and password.</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={this.state.displayName}
						handleChange={handleChange}
						required
						label='Display Name'
					/>
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
					<FormInput
						type='password'
						name='confirmPassword'
						value={this.state.confirmPassword}
						handleChange={handleChange}
						required
						label='Confirm Password'
					/>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
