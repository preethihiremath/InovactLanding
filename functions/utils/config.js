// lambda/utils/config.js
// Circumvent problem with Netlify CLI.
// https://github.com/netlify/netlify-dev-plugin/issues/147
exports.BASE_URL =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:8888'
		: process.env.BASE_URL;

exports.COOKIE_SECURE = process.env.NODE_ENV !== 'development';

exports.ENDPOINT =
	process.env.NODE_ENV === 'development' ? '/.netlify/functions' : '/api';

// Google Credentials
exports.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
exports.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// Github Credentials
exports.GITHUB_CLIENT_ID =
	process.env.NODE_ENV === 'development'
		? '61991fb789cec4f82034'
		: process.env.GITHUB_CLIENT_ID;
exports.GITHUB_CLIENT_SECRET =
	process.env.NODE_ENV === 'development'
		? '4947a363b956efa15ada30cb6262e8065afd1675'
		: process.env.GITHUB_CLIENT_SECRET;

exports.SECRET = process.env.SECRET || 'SUPERSECRET';
