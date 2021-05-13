// const express = require('express');
// const serverless = require('serverless-http');
// const app = express();
// app.post('/create-checkout-session')
// * the above code can be further used to create this route usning express framework

const stripe = require('stripe')(process.env.STRIPE_SECRET);
const { STRIPE_PUBLISHABLE_KEY } = require('./utils/config');

exports.handler = async (event, context, callback) => {
	// const { priceId } = event.queryStringParameters;
	const { priceId } = JSON.parse(event.body);

	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 400,
			body: 'You are not using a http POST method for this endpoint.',
			headers: {
				Allow: 'POST',
			},
		};
	}

	try {
		const session = await stripe.checkout.sessions.create({
			mode: 'subscription',
			payment_method_types: ['card'],
			line_items: [
				{
					price: priceId,
					// this attribute is for metered billling
					quantity: 1,
				},
			],

			// {CHECKOUT_SESSION_ID} is a string literal

			success_url: 'http://localhost:8888?session_id={CHECKOUT_SESSION_ID}',
			cancel_url: 'http://localhost:8888/payment_cancel',
		});
		return {
			statusCode: 200,
			body: JSON.stringify({
				sessionId: session.id,
				publishableKey: STRIPE_PUBLISHABLE_KEY,
			}),
		};
	} catch (e) {
		return {
			statusCode: 400,
			body: JSON.stringify({ message: e.message }),
		};
	}
};
