let mongoose = require('mongoose');

let movieModel = require('./model')


let movieSearch = (req, res) => {
    console.log(req.body.search)
    let body = req.body;

    movieModel.find(req.body)

        .then(
            (response) => {
                res.status(200).json({ status: true, message: "Success", response: response })
            })
        .catch(
            (error) => {
                console.log("error", error);
                res.status(500).json({ status: false, message: "Error while Searching please try again", response: error })
            }
        )
}

module.exports = {
    movieSearch
}