const { query } = require('./utils/hasura');

exports.handler = async () => {
	const project = await query({
		query: `query getProjects {
			project {
				caption
				created_at
				description
				id
				title
				updated_at
				user_id
				url
				user {
					avatar
					first_name
					last_name
					user_name
				}
				project_comments {
					created_at
					id
					project_id
					text
					updated_at
					user_id
					user {
						avatar
						first_name
						last_name
						user_name
					}
				}
				project_comments_aggregate {
					aggregate {
						count
					}
				}
				project_likes_aggregate {
					aggregate {
						count
					}
				}
			}
		}		
		`,
	});

	return {
		statusCode: 200,
		body: JSON.stringify(project),
	};
};
