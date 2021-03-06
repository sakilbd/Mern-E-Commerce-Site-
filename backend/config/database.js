const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URL, {

        useUnifiedTopology: true,

    }).then(con => {
        console.log(`MongoDb Datatbase connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase