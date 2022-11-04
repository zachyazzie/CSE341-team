const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGODB_URI}`,{
    //useCreateIndex: true,
    useNewUrlParser: true
})

.then(
    db => console.log('DB is connected')
)
.catch(e => console.error(e))