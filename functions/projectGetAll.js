const { query } = require('./utils/hasura');

exports.handler = async () => {
	const { project } = await query({
		query: `query getAllProject {
			project {
				caption
				created_at
				description
				id
				updated_at
				url
				user_id
			}
		}
		`,
	});

	return {
		statusCode: 200,
		body: JSON.stringify(project),
	};
};
