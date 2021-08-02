const mongoose = require ('mongoose')

const db_connection = () =>{
    mongoose.connect('mongodb+srv://mariem:mariem12345@cluster0.xw37n.mongodb.net/resto?retryWrites=true&w=majority', 
    {

    useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      })
      .then(() =>{console.log('data_base connected')})
      .catch(()=>{console.log('error')})
}

module.exports = db_connection


