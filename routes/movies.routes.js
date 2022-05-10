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

router.get("/", async (req, res, next) => {

    try {

        const movies = await MovieModel.find().select("title")
        res.render("movies/movies.hbs", {
            movies
        })

    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {

    const { id } = req.params
    try {
        const movie = await MovieModel.findById(id).populate("cast")
        
        res.render("movies/movie-details.hbs", {
            movie
        })

    } catch(err) {
        next(err)
    }
})

router.post("/:id/delete", async (req, res, next) => {
    const { id } = req.params
    try {

    await MovieModel.findByIdAndRemove(id)

    res.redirect("/movies")

    } catch(err) {
        next(err)
    }
})

router.get("/:id/edit", async (req, res, next) => {
const { id } = req.params
    try {
       const movie = await MovieModel.findById(id)
       const celebrities = await CelebrityModel.find()

        res.render("movies/edit-movie.hbs", {
            movie,
            celebrities
        })

    } catch(err) {
        next(err)
    }
})

router.post("/:id/edit", async (req, res, next) => {
    const { id } = req.params
    const { title, genre, plot, cast } = req.body
    try {

        await MovieModel.findByIdAndUpdate(id, {
            title,
            genre,
            plot,
            cast
        })
        res.redirect(`/movies/${id}`)

    } catch(err) {
        next(err)
    }
})



module.exports = router;