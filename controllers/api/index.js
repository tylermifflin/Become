const router = require('express').Router();
const userRoutes = require('./userRoutes');
const GoalRoutes = require('./GoalRoutes');
const timeCapsule = require('./timeCapsuleRoutes')


router.use('/users', userRoutes);
router.use('/goals', GoalRoutes);
router.use('/timeCapsules', timeCapsule);

module.exports = router;
