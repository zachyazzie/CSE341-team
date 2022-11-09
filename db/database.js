const mongoose = require('mongoose');

mongoose.connect(`${process.env.DB_CONNECTION_STRING}`,{
    //useCreateIndex: true,
    useNewUrlParser: true
})

.then(
    db => console.log('DB is connected')
)
.catch(e => console.error(e))