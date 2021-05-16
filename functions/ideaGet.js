const { query } = require('./utils/hasura');
const client = require('./utils/redis');

exports.handler = async (event, context, callback) => {
	// context.callbackWaitsForEmptyEventLoop = false;

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
					query: `query getIdeaById {
            idea(where: {id: {_eq: ${id}}}) {
              caption
              created_at
              description
              id
              title
              updated_at
              url
              user_id
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
