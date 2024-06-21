/*database connection*/
const {
	Admins_ip,
	Allowed_ips,
	connection,
	sequelize,
} = require("../data/dbconn");
const { validationResult } = require("express-validator");
const httpStatusText = require("../utils/httpStatustext");
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwt_secret_key = process.env.JWT_SECRET_KEY;

// get all users' data from database
const getAllusers = async (req, res) => {
	if (Admins_ip.indexOf(req.ip) !== -1) {
		try {
			const users = await User.findAll();
			res.status(200).send({
				status: httpStatusText.SUCCESS,
				data: users,
			});
		} catch (error) {
			res.status(400).send({
				status: httpStatusText.FAIL,
				data: null,
				msg: error,
			});
		}
	} else {
		res.status(401).send({
			status: httpStatusText.FAIL,
			data: { data: "authentication refused" },
		});
	}
};

// login function
const login = async (req, res) => {
	if (Allowed_ips.indexOf(req.ip) !== -1) {
		const { email, password } = req.body;
		try {
			const user = await User.findAll({
				where: {
					email: email,
				},
			});
			if (user.length > 0) {
				const matchPassword = await bcrypt.compare(
					password,
					user[0].password
				);
				if (matchPassword) {
					const token = await jwt.sign(
						{ email: user[0].email, id: user[0]._id },
						jwt_secret_key,
						{ expiresIn: "10d" }
					);
					user[0].token = token;
					res.status(200).send({
						status: httpStatusText.SUCCESS,
						data: {
							id: user[0].id,
							name: user[0].name,
							email: user[0].email,
							address1: user[0].address1,
							address2: user[0].address2 || null,
							phone_number: user[0].phone_number,
							age: user[0].age,
							gender: user[0].gender,
						},
						token: user[0].token,
					});
				} else {
					res.status(400).send({
						status: httpStatusText.FAIL,
						data: null,
						msg: "wrong password",
					});
				}
			} else {
				res.status(404).send({
					status: httpStatusText.FAIL,
					data: null,
					msg: "email doesn't exists",
				});
			}
		} catch (error) {
			if (error.errors) {
				res.status(400).send({
					status: httpStatusText.FAIL,
					data: null,
					msg: error.errors[0].message,
				});
			} else {
				// Handle the case when error.errors is undefined
				res.status(400).send({
					status: httpStatusText.FAIL,
					data: null,
					msg: error.message,
				});
			}
		}
	} else {
		res.status(401).send({
			status: httpStatusText.FAIL,
			data: null,
			msg: "authentication refused",
		});
	}
};

//signup function
const signup = async (req, res) => {
	if (Allowed_ips.indexOf(req.ip) !== -1) {
		const errors = validationResult(req);
		if (errors.isEmpty()) {
			const {
				name,
				email,
				password,
				address1,
				address2,
				phone_number,
				gender,
				age,
			} = req.body;
			const newUser = User.build({
				name: name,
				email: email,
				password: await bcrypt.hash(password, 10),
				address1: address1,
				address2: address2 ? address2 : null,
				phone_number: phone_number,
				gender: gender,
				age: age,
			});

			try {
				const token = await jwt.sign(
					{ email: newUser.email, id: newUser._id },
					jwt_secret_key,
					{ expiresIn: "10d" }
				);
				newUser.token = token;
				await newUser.save();
				res.status(201).send({
					status: httpStatusText.SUCCESS,
					data: {
						id: newUser.id,
						name: newUser.name,
						email: newUser.email,
						address1: address1,
						address2: address2 ? address2 : null,
						phone_number: phone_number,
						gender: gender,
						age: age,
						user_token: newUser.token,
					},
				});
			} catch (error) {
				res.status(406).send({
					status: httpStatusText.FAIL,
					data: null,
					msg: error.errors[0].message,
				});
			}
		} else {
			res.status(406).send({
				status: httpStatusText.FAIL,
				data: null,
				msg: errors.array()[0]["msg"],
			});
		}
	} else {
		res.status(401).send(
			res.status(400).send({
				status: httpStatusText.FAIL,
				data: null,
				msg: "authentication refused",
			})
		);
	}
};

// deleting the user's account
const deleteAccount = async (req, res) => {
	if (Allowed_ips.indexOf(req.ip) !== -1) {
		const { email, password } = req.body;
		try {
			user = await User.findAll({
				where: {
					email: email,
				},
			});

			if (user.length > 0) {
				const matchPassword = await bcrypt.compare(
					password,
					user[0].password
				);
				if (matchPassword) {
					try {
						await User.destroy({
							where: {
								email: email,
							},
						});
						res.status(200).send({
							status: httpStatusText.SUCCESS,
							data: null,
							msg: "user deleted",
						});
					} catch (error) {
						res.status(400).send({
							status: httpStatusText.FAIL,
							data: null,
							msg: error.errors[0].message,
						});
					}
					res.status(200).send({
						status: httpStatusText.SUCCESS,
						data: user[0],
					});
				} else {
					res.status(400).send({
						status: httpStatusText.FAIL,
						data: null,
						msg: "wrong password",
					});
				}
			} else {
				res.status(404).send({
					status: httpStatusText.FAIL,
					data: null,
					msg: "email doesn't exists",
				});
			}
		} catch (error) {
			res.status(400).send({
				status: httpStatusText.FAIL,
				data: null,
				msg: error,
			});
		}
	} else {
		res.status(401).send("authentication refused");
	}
};

// updating the user's account
const updateAccount = async (req, res) => {
	if (Allowed_ips.indexOf(req.ip) !== -1) {
		const {
			name,
			email,
			password,
			new_password,
			address1,
			address2,
			phone_number,
			gender,
			age,
		} = req.body;
		const errors = validationResult(req);
		if (errors.isEmpty()) {
			try {
				user = await User.findAll({
					where: {
						email: email,
					},
				});
				if (user.length > 0) {
					const matchPassword = await bcrypt.compare(
						password,
						user[0].password
					);
					if (matchPassword) {
						try {
							await User.update(
								{
									name: name,
									email: email,
									password: await bcrypt.hash(new_password, 10),
									address1: address1,
									address2: address2 ? address2 : null,
									phone_number: phone_number,
									gender: gender,
									age: age,
								},
								{
									where: {
										email: email,
									},
								}
							);
							res.status(200).send({
								status: httpStatusText.SUCCESS,
								data: null,
								msg: "user has been updated successfully",
							});
						} catch (error) {
							res.status(400).send(error);
						}
					} else {
						res.status(400).send({
							status: httpStatusText.FAIL,
							data: null,
							msg: "wrong password",
						});
					}
				} else {
					res.status(404).send({
						status: httpStatusText.FAIL,
						data: null,
						msg: "email doesn't exists",
					});
				}
			} catch (error) {
				res.status(400).send({
					status: httpStatusText.FAIL,
					data: null,
					msg: error.errors[0].message,
				});
			}
		} else {
			res.status(400).send({
				status: httpStatusText.FAIL,
				data: null,
				msg: errors.array()[0]["msg"],
			});
		}
	} else {
		res.status(401).send({
			status: httpStatusText.FAIL,
			data: null,
			msg: "authentication refused",
		});
	}
};

module.exports = {
	getAllusers,
	login,
	signup,
	deleteAccount,
	updateAccount,
};
