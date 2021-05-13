const jwt = require('jsonwebtoken');
const { SECRET } = require('../../utils/config');

module.exports = function checkAuth(event) {
	const { cookie } = event.headers;
	return new Promise((resolve, reject) => {
		if (!cookie) {
			const reason = 'you need to be authorized';
			return reject(new Error(reason));
		}

		const authToken = cookie.replace('jwt=', '');
		try {
			let decodedToken = jwt.decode(authToken, { complete: true });
		} catch (err) {
			// const reason = '';
			return reject(new Error('malformed token'));
		}

		try {
			jwt.verify(authToken, SECRET, (verifyError, decoded) => {
				if (verifyError) {
					return reject(new Error('token signature not verified'));
				}

				return resolve(decoded);
			});
		} catch (err) {
			return reject(err);
		}
	});
};
