const moongose = require('mongoose');
const uri = 'mongodb://localhost/Portfolio';
moongose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    // cambiar a try y catch
    .then(db => console.log('DB is connected to', uri))
    .catch(err => console.log(err));