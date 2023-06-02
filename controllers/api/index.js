const router = require('express').Router();
const userRoutes = require('./userRoutes');
const goalRoutes = require('./GoalRoutes');
const timeCapsule = require('./timeCapsuleRoutes')


router.use('/users', userRoutes);
router.use('/goals', goalRoutes);
router.use('/timeCapsule', timeCapsuleRoutes);


module.exports = router;
