const router = require('express').Router();
const userRoutes = require('./userRoutes');
const GoalRoutes = require('./goalRoutes');
const timeCapsule = require('./timeCapsule)')


router.use('/users', userRoutes);
router.use('/goals', GoalRoutes);
router.use('/timeCapsule', timeCapsule);

module.exports = router;
