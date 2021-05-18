const { query } = require('./utils/hasura');
const client = require('./utils/redis');

exports.handler = async (event) => {
	const { id } = event.queryStringParameters;

	client.on('error', (error) => {
		console.log(error);
	});

	const promise = new Promise((resolve, reject) => {
		client.get(`idea:${id}`, async (err, idea) => {
			if (err) {
				reject(Error(err));
			}
			if (idea) {
				//! writing the return inside an async function errors out as the base function
				//! does not have a return
				resolve({ statusCode: 200, body: JSON.stringify(idea) });
			} else {
				const { idea } = await query({
					query: `query getIdea {
						idea(where: {id: {_eq: ${id}}}) {
							caption
							created_at
							description
							id
							title
							updated_at
							url
							user_id
							user {
								user_name
								first_name
								avatar
								last_name
							}
							idea_comments {
								created_at
								id
								idea_id
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
							idea_likes_aggregate {
								aggregate {
									count
								}
							}
							idea_comments_aggregate {
								aggregate {
									count
								}
							}
						}
					}
					
            `,
				});
				client.setex(`idea:${id}`, 3600, JSON.stringify(idea));
				resolve({ statusCode: 200, body: JSON.stringify(idea) });
			}
		});
	});
	return promise;
};
