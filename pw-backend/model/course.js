const Joi = require('joi');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true, trim: true },
    time: { type: String, required: true },
    price: { type: Number, required: true }
});

const Course = mongoose.model('Course', courseSchema);

const validate = course => {
    const schema = {
        title: Joi.string().required(),
        imageUrl: Joi.string().required(),
        time: Joi.string().required(),
        price: Joi.number().required()
    };

    return Joi.validate(course, schema);
};

module.exports = {
    Course,
    validate
};
