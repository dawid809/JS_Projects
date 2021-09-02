const express = require('express');
const dbConfig = require("./config/db.config");

const app = express();
app.use(express.json()); 

require('./routes/product.routes')(app);
require('./routes/categories.routes')(app);


const db = require("./models");


db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });



app.listen(3000, () => console.log('Example app listening on port 3000!'));
