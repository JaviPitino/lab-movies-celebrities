const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model");
const MovieModel = require("../models/Movie.model");

router.get("/create", async (req, res, next) => {

    try {
        const celebrities = await CelebrityModel.find().select("name")

        res.render("movies/new-movie.hbs", {
            celebrities
        })

    } catch(err) {
        next(err)
    }
})

router.post("/create", async (req, res, next) => {
    const { title, genre, plot, cast } = req.body
    try {
        await MovieModel.create({
            title,
            genre,
            plot,
            cast
        })
        res.redirect("/movies")

    } catch(err) {
        next(err)
    }
})



module.exports = router;