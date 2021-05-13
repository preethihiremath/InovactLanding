import * as React from 'react';
import getStripe from '../utils/stripeConfig';
import axios from 'axios';

type IpriceId = string;
interface stripeAPIResponse {
	sessionId: string;
	publishableKey: string;
}

const TestButtons = (): JSX.Element => {
	// console.log(process.env);

	const createCheckoutSessoin = async (
		priceId: IpriceId
	): Promise<stripeAPIResponse> => {
		const result = await axios({
			method: 'POST',
			url: 'http://localhost:8888/.netlify/functions/subscriptions',
			data: JSON.stringify({
				priceId,
			}),
		});
		console.log(result);
		return result.data;
	};

	const handleCheckout = async (PRICE_ID: IpriceId) => {
		const response = await createCheckoutSessoin(PRICE_ID);
		console.log(response);
		getStripe(response.publishableKey)
			.then((result) => {
				return result;
			})
			.then((stripe) => {
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				return stripe?.redirectToCheckout({
					sessionId: response.sessionId,
				});
			});
	};

	return (
		<div>
			{process.env.NODE_ENV !== 'development' ? (
				<div>
					<a
						href='https://inovact-authentication-serverless.netlify.app/api/auth/github'
						className='w3-button w3-black'
					>
						GITHUB
					</a>
					&ensp;
					<a
						href='https://inovact-authentication-serverless.netlify.app/api/auth/google'
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
					&ensp;
					<button
						className='w3-button w3-black'
						onClick={() => handleCheckout('price_1IqhIVSFMXzumGVmLuDEAsmF')}
					>
						Payment
					</button>
				</div>
			)}
		</div>
	);
};

export default TestButtons;
