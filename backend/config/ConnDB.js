const mongoose = require('mongoose')

const ConnDB = () =>{
    try {
        mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        })
            console.log("Database Connected Successfully")
          
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = ConnDB