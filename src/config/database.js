const moongose = require('mongoose');

moongose.connect('mongodb://localhost/Portfolio', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    // cambiar a try y catch
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));