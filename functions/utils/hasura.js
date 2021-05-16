const fetch = require('node-fetch');

//? This is a utility function for querying the postgresql database
async function query({ query, variables = {} }) {
	try {
		const result = await fetch(process.env.HASURA_API_URL, {
			method: 'POST',
			headers: {
				'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
			},
			body: JSON.stringify({ query, variables }),
		}).then((response) => response.json());
		return result.data;
	} catch (e) {
		return e.message;
	}
}

exports.query = query;
