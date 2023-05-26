const router = require('express').Router();
const { Goals, TimeCapsule, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
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

    // Serialize data so the template can read it
    const goals = projectData.map((goal) => goal.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      goals, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
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

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
