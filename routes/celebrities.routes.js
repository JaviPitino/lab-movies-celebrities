const CelebrityModel = require("../models/Celebrity.model");

const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.render("celebrities/celebrities.hbs")
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