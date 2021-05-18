const fetch = require('node-fetch');
const { HASURA_API, HASURA_ADMIN_SECRET } = require('./config');

//? This is a utility function for querying the postgresql database
async function query({ query, variables = {} }) {
	try {
		const result = await fetch(HASURA_API, {
			method: 'POST',
			headers: {
				'x-hasura-admin-secret': HASURA_ADMIN_SECRET,
			},
			body: JSON.stringify({ query, variables }),
		}).then(response => response.json())
		return result;
	} catch (e) {
		return e.message;
	}
}

exports.query = query;
