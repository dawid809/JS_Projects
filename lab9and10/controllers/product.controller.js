const Category = require('../models/category.model');
const Product = require('../models/product.model');


exports.getAll = (req, res) => {
    Product.find().populate('category').exec(function (err, products) {
        res.status(200).send(products);
    });  
  };

exports.add = (req, res) => {
  Category.findOne({ _id: req.body.category}).exec((err,category) => {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: category._id
    });    
    product.save(err => {
      if (err) {
        console.log(err);
        return false;;
      }
      return true;
    });  
  });

}

exports.update = (req, res) => {
  Product.updateOne({_id: req.body.id}, {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  }).exec();
}

exports.delete = (req, res) => {
  Product.deleteOne({_id: req.body.id}).exec();
}
