const CelebrityModel = require("../models/Celebrity.model");

const router = require("express").Router();

router.get("/", async (req, res, next) => {

    try {
        const celebrities = await CelebrityModel.find()
        res.render("celebrities/celebrities.hbs", {
            celebrities
        })

    } catch(err) {
        next(err)
    }

})

router.get("/create", (req, res, next) => {

   res.render("celebrities/new-celebrity.hbs")

})

router.post("/create", async (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body
    try {
        
        await CelebrityModel.create({
            name,
            occupation,
            catchPhrase
        })

        res.redirect("/celebrities")

    } catch(err) {
        res.render("celebrities/new-celebrity.hbs")
    }


})




module.exports = router;