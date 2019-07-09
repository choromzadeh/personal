const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { Course, validate } = require('../model/course');

router.get('/', async (req, res) => {
    const courses = await Course.find();

    if (!courses)
        return res.status(400).send('There is not course in database.');

    res.status(200).send(courses);
});

router.get('/count', async (req, res) => {
    const documentCount = await Course.countDocuments();
    if (!documentCount)
        return res.status(400).send('There is not post in database.');

    res.status(200).send({ count: documentCount });
});

router.post('/', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let course = new Course({
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        time: req.body.time,
        price: req.body.price
    });

    course = await course.save();

    res.status(200).send(course);
});

router.put('/:id', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = await Course.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title,
            imageUrl: req.body.imageUrl,
            time: req.body.time,
            price: req.body.price
        },
        { new: true }
    );

    if (!course)
        return res.status(404).send('There is no course for the given id.');

    res.status(200).send(course);
});

router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (!course)
        return res.status(404).send('There is no course for the given id.');

    res.status(200).send(course);
});

router.delete('/:id', auth, async (req, res) => {
    const course = await Course.findByIdAndRemove(req.params.id);

    if (!course)
        return res.status(404).send('There is no course for the given id.');
    res.status(200).send(course);
});

module.exports = router;
