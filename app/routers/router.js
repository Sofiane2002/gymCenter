const express = require('express');

const router = express.Router();

const memberController = require('../controllers/memberController');
const coachController = require('../controllers/coachesController');
const activityController = require('../controllers/activitiesController')


// MEMBER ROUTES
router.get('/members', memberController.getAll );
router.get('/members/:id(\\d+)', memberController.getOneById);
router.patch('/members/:id(\\d+)', memberController.updateOne);
router.delete('/members/:id(\\d+)', memberController.deleteOne);
router.post('/registrymember', memberController.insert);

// COACH ROUTES

router.get('/coaches', coachController.getAll );
router.get('/coaches/:id(\\d+)', coachController.getOneById);
router.patch('/coaches/:id(\\d+)', coachController.updateOne);
router.delete('/coaches/:id(\\d+)', coachController.deleteOne);
router.post('/registrycoach', coachController.insert);

// ACTIVITIES ROUTES

router.get('/activities', activityController.getAll );
router.get('/activities/:id(\\d+)', activityController.getOneById);
router.patch('/activities/:id(\\d+)', activityController.updateOne);
router.delete('/activities/:id(\\d+)', activityController.deleteOne);
router.post('/registryactivity', activityController.insert);


module.exports = router;

