const router = require('express').Router();
const { Goals } = require('../../models');
const withAuth = require('../../utils/auth');

// The `/api/tags` endpoint

router.get('/', withAuth, async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const goalsData = await Goals.findAll({
      include: [{ model: Goals }],
    });
    res.status(200).json(goalsData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const goalsData = await Goals.findByPk(req.params.id, {
      include: [{ model: Goals }],
    });

    if (!goalsData) {
      res.status(404).json({ message: 'No goals found with this id!' });
      return;
    }

    res.status(200).json(goalsData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  // create a new tag
  try {
    const goalsData = await Goals.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(goalsData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const goalsData = await Goals.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!goalsData[0]) {
      res.status(404).json({ message: 'No goals found with this id!' });
      return;
    }
    res.status(200).json(goalsData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  // delete on tag by its `id` value
  try {
    const goalsData = await Goals.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!goalsData) {
      res.status(404).json({ message: 'No goals found with this id!' });
      return;
    }

    res.status(200).json(goalsData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;

