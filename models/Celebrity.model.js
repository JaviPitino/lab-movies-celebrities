//  Add your code here
const mongoose = require("mongoose");

const celibritySchema = new mongoose.Schema({

    name: {
        type: String
    },
    occupation: {
        type: String
    },
    catchPhrase: {
        type: String
    }

})

const CelebrityModel = mongoose.model("celebrity", celibritySchema)

module.exports = CelebrityModel;