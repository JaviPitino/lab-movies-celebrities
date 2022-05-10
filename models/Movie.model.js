const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({

    title: {
        type: String
    },
    genre: {
        type: String
    },
    plot: {
        type: String
    },
    cast: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "celebrity"
    }]

})

const MovieModel = mongoose.model("movie", movieSchema);

module.exports = MovieModel;