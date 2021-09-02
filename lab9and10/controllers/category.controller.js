const Category = require('../models/category.model');


exports.getAll = (req, res) => {
    Category.find({}, function (err, categories) {
        res.status(200).send(categories);
    });
};

exports.add = (req, res) => {
    const category = new Category({
        name: req.body.name,
    });
    category.save(err => {
        if(err) {
            console.log(err);
            return false;
        }
        return true;
    });
}
