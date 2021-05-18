const { query } = require('./utils/hasura');
const emailRegEx = require('./utils/config').emailRegEx;
const passwordRegEx = require('./utils/config').passwordRegEx;
const { parse } = require('querystring');
const crypto = require('crypto');

// Create a SHA256 hash
const hash = function (str) {
    if (typeof (str) == 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', require('./utils/config').SECRET).update(str).digest('hex');
        return hash;
    } else {
        return false;
    }
};

exports.handler = async (event, context) => {
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

    const email_id = typeof (event.body.email_id) == 'string' && emailRegEx.test(event.body.email_id.trim().toLowerCase()) ? event.body.email_id.trim().toLowerCase() : false;
    const user_name = typeof (event.body.user_name) == 'string' && event.body.user_name.trim().length > 0 ? event.body.user_name.trim() : false;
    const password = typeof (event.body.password) == 'string' && passwordRegEx.test(event.body.password.trim()) ? hash(event.body.password.trim()) : false;
    const first_name = typeof (event.body.first_name) == 'string' && event.body.first_name.trim().length > 0 ? event.body.first_name.trim() : false;
    const last_name = typeof (event.body.last_name) == 'string' && event.body.last_name.trim().length > 0 ? event.body.last_name.trim() : false;

    if (email_id && user_name && password) {
        const result = await query({
            query: `
                mutation add_user {
                    insert_user(objects: [{
                        user_name: "${user_name}"
                        email_id: "${email_id}"
                        password: "${password}"
                        first_name: "${first_name}"
                        last_name: "${last_name}"
                    }]) {
                        returning {
                            id
                            email_id
                            user_name
                        }
                    }
                }
            `
        });

        if (!result.errors) {
            const postedValue = result.data.insert_user.returning[0];

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