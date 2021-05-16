const redis = require('redis');

const client = redis.createClient({
	host: 'redis-19575.c264.ap-south-1-1.ec2.cloud.redislabs.com',
	port: '19575',
	password: 'yFFSp5apwWbIVD7OIYXNdOZOQKyh4ti8',
});

module.exports = client;
