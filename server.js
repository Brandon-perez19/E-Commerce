//importing routes
import routes from './routes/index.js'

//importing express from npm
import express from 'express';

// import sequelize connection
import sequelize from './config/connection.js'

//calling express to be use, setting port to variable
const app = express();
const PORT = process.env.PORT || 3001;

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//using imported routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

