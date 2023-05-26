const router = require('express').Router();
const { TimeCapsule } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const TimeCapsuleData = await TimeCapsule.findAll({
      include: [{ model: TimeCapsule }],
    });
    res.status(200).json(goalsData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newTimeCapsule = await TimeCapsule.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTimeCapsule);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const TimeCapsuleData = await TimeCapsule.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!TimeCapsuleData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(TimeCapsuleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
