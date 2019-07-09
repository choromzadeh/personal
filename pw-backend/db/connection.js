const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb://localhost/pw_db',
        { useNewUrlParser: true, useFindAndModify: false }
    )
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Error:', err.message));
