import * as React from 'react';
import gitIcon from '../assets/img/git.png'
import googleIcon from '../assets/img/google-icon.png';
const TestButtons = (): JSX.Element => {
	// console.log(process.env);

	return (
		<div>
			{process.env.NODE_ENV !== 'development' ? (
				<div>
					<a
						href='https://inovact-authentication-serverless/api/auth/github'
						className='w3-button w3-black'
					>
						GITHUB
					</a>
					&ensp;
					<a
						href='https://inovact-authentication-serverless/api/auth/google'
						className='w3-button w3-black'
					>
						GOOGLE
					</a>
				</div>
			) : (
				// eslint-disable-next-line jsx-a11y/anchor-has-content
				<div className="signup-icons">
					<a
						href='http://localhost:8888/.netlify/functions/auth/github'
						
					>
					  <img src={gitIcon} alt='git' width="35px" />
					</a>
					&ensp;
					<a
						href='http://localhost:8888/.netlify/functions/auth/google'
						
					>  <img src={googleIcon} alt='google' width="35px" />
					</a>
				</div>
			)}
		</div>
	);
};

export default TestButtons;
