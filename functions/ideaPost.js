const query = require('./utils/hasura');
const middy = require('middy');
const requireAuth = require('./middlewares/auth/requireAuth');

const ideaPost = (event) => {
    const url = typeof (event.body.url) == 'string' ? event.body.url.trim() : false;
    const caption = typeof (event.body.caption) == 'string' && event.body.caption.trim().length > 0 ? event.body.caption.trim() : false;
    const description = typeof (event.body.description) == 'string' && event.body.description.trim().length > 0 ? event.body.description.trim() : "";
    const title = typeof (event.body.title) == 'string' && event.body.title.trim().length > 0 ? event.body.title.trim() : "";
    const user = typeof (event.user) == 'object' ? event.user : false;

    if (user && title) {
        return new Promise(async (resolve, reject) => {
            const { idea } = await query({
                query: `
                    mutation add_idea {
                        insert_idea(objects: [
                            {
                                url: "${url}"
                                title: "${title}"
                                description: "${description}"
                                caption: "${caption}"
                                user_id: "${user.id}"
                            }
                        ]) {
                            returning {
                                id
                            }
                        }
                    }
                `
            });

            resolve({
                statusCode: 201,
                body: JSON.stringify(idea)
            });
        });
    } else {
        return {
            statusCode: 400,
            body: 'Invalid or missing parameters'
        }
    }
}

exports.handler = middy(ideaPost).use(requireAuth);