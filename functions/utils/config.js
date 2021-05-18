// lambda/utils/config.js
// Circumvent problem with Netlify CLI.
// https://github.com/netlify/netlify-dev-plugin/issues/147
require('dotenv').config();

exports.BASE_URL =
	process.env.NODE_ENV !== 'development'
		? process.env.BASE_URL
		: 'http://localhost:8888';  

exports.COOKIE_SECURE = process.env.NODE_ENV !== 'development';

exports.ENDPOINT =
	process.env.NODE_ENV === 'development' ? '/.netlify/functions' : '/api';

// Google Credentials
exports.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
exports.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// Github Credentials
exports.GITHUB_CLIENT_ID =
	process.env.NODE_ENV === 'development'
		? process.env.GITHUB_DEVELOPMENT_CLIENT_ID
		: process.env.GITHUB_CLIENT_ID;
exports.GITHUB_CLIENT_SECRET =
	process.env.NODE_ENV === 'development'
		? process.env.GITHUB_DEVELOPMENT_CLIENT_SECRET
		: process.env.GITHUB_CLIENT_SECRET;

// Stripe Credentials
exports.STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;
exports.STRIPE_SECRET = process.env.STRIPE_SECRET;

exports.SECRET = process.env.SECRET;

exports.HASURA_API = process.env.HASURA_API;
