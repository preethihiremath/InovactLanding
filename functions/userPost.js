const query = require('./utils/hasura');
const emailRegEx = require('./utils/config').emailRegEx;
const passwordRegEx = require('./utils/config').passwordRegEx;

// Create a SHA256 hash
const hash = function (str) {
    if (typeof (str) == 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', require('./utils/config').SECRET).update(str).digest('hex');
        return hash;
    } else {
        return false;
    }
};

exports.handler = (event, context) => {
    const email_id = typeof (event.body.email_id) == 'string' && emailRegEx.test(event.body.email_id.trim().toLowerCase()) ? event.body.email_id.trim().toLowerCase() : false;
    const user_name = typeof (event.body.user_name) == 'string' && event.body.user_name.trim().length > 0 ? event.body.user_name.trim() : false;
    const password = typeof (event.body.password) == 'string' && passwordRegEx.test(event.body.password.trim()) ? hash(event.body.password.trim()) : false;

    if (email_id && user_name && password) {
        return new Promise(async (resolve, reject) => {
            const { user } = await query({
                query: `
                    mutation {
                        insert_user(objects: [{
                            user_name: "${user_name}"
                            email_id: "${email_id}"
                            password: "${password}"
                        }]) {
                            returning {
                                id
                            }
                        }
                    }
                `
            });

            resolve({
                statusCode: 201,
                body: JSON.stringify(user)
            });
        })
    } else {
        return {
            statusCode: 400,
            body: 'Invalid or missing parameters'
        }
    }
}