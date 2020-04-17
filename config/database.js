// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/forum',
// {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

// const db = mongoose.connection;

// db.on('connected', function() {
//     console.log(`connected to MongoDB at ${db.host}:${db.port}`);
// });
// module.exports = mongoose;

const mongoose = require('mongoose');

// const DATABASE_URL='mongodb://localhost/users';
const DATABASE_URL = 'mongodb+srv://sei:sei@cluster0-zhgkc.mongodb.net/project2?retryWrites=true&w=majority'

mongoose.connect(
    DATABASE_URL,
    {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true
    });

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
})
module.exports = mongoose;