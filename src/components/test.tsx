import * as React from 'react';

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
				<div>
					<a
						href='http://localhost:8888/.netlify/functions/auth/github'
						className='w3-button w3-black'
					>
						GITHUB
					</a>
					&ensp;
					<a
						href='http://localhost:8888/.netlify/functions/auth/google'
						className='w3-button w3-black'
					>
						GOOGLE
					</a>
				</div>
			)}
		</div>
	);
};

export default TestButtons;
