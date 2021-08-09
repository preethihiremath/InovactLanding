import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import TestButtons from '../test';
import '../../styles/login.css';


type LoginState = {

	errors: object;
};

type Props = any;

class Login extends React.Component<Props, LoginState> {
	constructor(props: any) {
		super(props);

		this.state = {
			errors: {},
		};
	}

	onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
		const key = e.currentTarget.id;

		//* this is a good way and the below one is a naive way to implement
		// if (Object.keys(this.state).includes(key)) {
		// 	this.setState({ [key]: e.currentTarget.value } as unknown as Pick<
		// 		LoginState,
		// 		keyof LoginState
		// 	>);
		// }
		switch (key) {
			case 'email':
			
				break;
			case 'password':
			      break;
		}
	};
	onSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		let params = new URLSearchParams(this.props.location.search); //pars query parametes
		return (
			params.get('login') && (
				<Modal>
					<section className='section'>
						<div className='register-container'>
							<div className='user signinBx'>
								<div className='formBx'>
									<form onSubmit={this.onSubmit}>
										<div className='modal-header'>
											<h2>Sign In</h2>
											<button
												type='button'
												className='close'
												data-dismiss='modal'
												onClick={() => {
													this.props.history.push(this.props.location.pathname);
												}}
											>
												&times;
											</button>
										</div>
										<input
											style={{ padding: '10px 10px', margin: '8px 0' }}
											type='text'
											id='email'
											placeholder='Email Address'
											onChange={this.onChange}
										/>
										<span style={{ color: 'red' }}></span>
										<input
											style={{ padding: '10px 10px', margin: '8px 0' }}
											type='password'
											id='password'
											placeholder='Password'
											onChange={this.onChange}
										/>

										<input type='submit' value='Login' />
										<p className='signup' style={{ textAlign: 'center' }}>
											Don't have an account ?<Link to='/'>Sign Up</Link>
										</p>
										<div className='other-signup'>
											<span style={{ fontSize: '12px', color: 'grey' }}>
												or signup using
											</span>
											<TestButtons />
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
				</Modal>
			)
		);
	}
}

export default Login;
