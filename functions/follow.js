const query = require('./utils/hasura');
const middy = require('middy');
const requireAuth = require('./middlewares/auth/requireAuth');

const follow = (event) => {
    try {
        const leader_id = typeof (event.queryStringParameters) == 'string' ? parseInt(event.queryStringParamters.trim()) : false;
        const user = typeof (event.user) == 'object' ? event.user : false;

        if (user && leader_id) {
            return new Promise(async (resolve, reject) => {
                const { follower } = await query({
                    query: `
                        mutation add_follower {
                            insert_follower(objects: [{
                                leader_id: "${leader_id}"
                                follower_id: "${user.id}"
                            }]) {
                                returning {
                                    id
                                }
                            }
                        }
                    `
                });

                resolve({
                    statusCode: 200,
                    body: JSON.stringify(follower)
                });
            })
        } else {
            return {
                statusCode: 400,
                body: 'Invalid or missing parameters'
            }
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: 'Invalid leader_id'
        }
    }
}

exports.handler = middy(follow).use(requireAuth);