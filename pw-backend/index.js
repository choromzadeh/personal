require('./db/connection');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const posts = require('./routes/posts');
const courses = require('./routes/courses');
const users = require('./routes/users');
const login = require('./routes/login');
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/api/post', posts);
app.use('/api/course', courses);
app.use('/api/users', users);
app.use('/api/login', login);

const port = process.env.PORT || 3900;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
