const middy = require('middy');
const requireAuth = require('./middlewares/auth/requireAuth');

const protectedFunction = async (event, context) => {
	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'Hello World' }),
	};
};

exports.handler = middy(protectedFunction).use(requireAuth());
