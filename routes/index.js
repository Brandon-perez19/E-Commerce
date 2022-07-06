//importing express from npm and setting up router to use
import express from 'express';
var router = express.Router();

//importing api routes
import apiRoutes from '../routes/api/index.js'

//setting the http /api to access api routes
router.use('/api', apiRoutes);

//if user goes to an http that is not supported
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

//exporting functions
export default router;