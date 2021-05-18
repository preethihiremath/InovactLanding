const { query } = require('./utils/hasura');
const middy = require('middy');
const requireAuth = require('./middlewares/auth/requireAuth');
const { parse } = require('querystring');

const ideaPost = async (event) => {
    if (event.httpMethod !== 'POST') return {
        statusCode: 405,
        body: 'You are not using a http POST method for this endpoint.',
        headers: {
            Allow: 'POST',
        },
    }

    try {
        event.body = JSON.parse(event.body);
    } catch (error) {
        event.body = parse(event.body);
    }

    const url = typeof (event.body.url) == 'string' ? event.body.url.trim() : false;
    const caption = typeof (event.body.caption) == 'string' ? event.body.caption.trim() : false;
    const description = typeof (event.body.description) == 'string' ? event.body.description.trim() : false;
    const title = typeof (event.body.title) == 'string' ? event.body.title.trim() : false;
    const user = typeof (event.user) == 'object' ? event.user : false;

    if (user && title) {
        const result = await query({
            query: `
                mutation add_idea {
                    insert_idea(objects: [
                        {
                            url: "${url}"
                            title: "${title}"
                            description: "${description}"
                            caption: "${caption}"
                            user_id: 3
                        }
                    ]) {
                        returning {
                            id
                            title
                            caption
                            description
                            url
                        }
                    }
                }
            `
        });

        if (!result.errors) {
            const postedValue = result.data.insert_idea.returning[0];

            return({
                statusCode: 201,
                body: JSON.stringify(postedValue)
            });
        } else {
            return {
                statusCode: 422,
                body: JSON.stringify({
                    errors: result.errors.map((error) => error.message)
                })
            }
        }
    } else {
        return {
            statusCode: 400,
            body: 'Invalid or missing parameters'
        }
    }
}

exports.handler = middy(ideaPost).use(requireAuth());