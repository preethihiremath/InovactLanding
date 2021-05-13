const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const passport = require('passport');
const serverless = require('serverless-http');

require('./utils/auth');

const { COOKIE_SECURE, ENDPOINT } = require('./utils/config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());

const handleCallback = () => (req, res) => {
	console.log(req.user);
	res
		.cookie('jwt', req.user.jwt, { httpOnly: true, COOKIE_SECURE })
		.redirect('/');
};

//for github
app.get(
	`${ENDPOINT}/auth/github`,
	passport.authenticate('github', { session: false })
);
app.get(
	`${ENDPOINT}/auth/github/callback`,
	passport.authenticate('github', { failureRedirect: '/', session: false }),
	handleCallback()
);

//for Google
app.get(
	`${ENDPOINT}/auth/google`,
	passport.authenticate('google', { session: false })
);
app.get(
	`${ENDPOINT}/auth/google/callback`,
	passport.authenticate('google', { failureRedirect: '/', session: false }),
	handleCallback()
);

app.get(
	`${ENDPOINT}/auth/status`,
	passport.authenticate('jwt', { session: false }),
	(req, res) => res.json({ email: req.user.email })
);

module.exports.handler = serverless(app);
