const Joi = require("joi");

const successfulResponse = Joi.object({
    message: Joi.string().required(),
    code: Joi.number().required()
});

const unsuccessfulResponse = Joi.object({
    message: Joi.string().required(),
    code: Joi.number().required()
});

const studentResponseSchema = Joi.object({
    id: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    yearLevel: Joi.number().required(),
    age: Joi.number().optional(),
    course: Joi.string().optional(),
    enrolledAt: Joi.date().required()
});

const createStudentSchema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    yearLevel: Joi.number().integer().min(1).max(8).required(),
    age: Joi.number().integer().min(10).max(100).optional(),
    course: Joi.string().max(100).optional(),
});

const updateStudentSchema = Joi.object({
    firstName: Joi.string().min(2).max(50).optional(),
    lastName: Joi.string().min(2).max(50).optional(),
    yearLevel: Joi.number().integer().min(1).max(8).optional(),
    age: Joi.number().integer().min(10).max(100).optional(),
    course: Joi.string().max(100).optional(),
});

module.exports = {
    createStudentSchema,
    updateStudentSchema,
    studentResponseSchema,
    successfulResponse,
    unsuccessfulResponse
};