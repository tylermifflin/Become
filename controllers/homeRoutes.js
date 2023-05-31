const router = require('express').Router();
const { Goals, TimeCapsule, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Goals, TimeCapsule, User }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/goals', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Goals }],
    });

    const user = userData.get({ plain: true });

    res.render('goals', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/goals/:id', async (req, res) => {
  try {
    const goalsData = await Goals.findByPk(req.params.id, {
      include: [{ model: Goals }],
    });

    const goal = goalsData.get({ plain: true });

    res.render('goals', {
      ...goal,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/timecapsule', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: TimeCapsule }],
    });

    const user = userData.get({ plain: true });

    res.render('timecapsule', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/timecapsule/:id', async (req, res) => {
  try {
    const timecapsuleData = await TimeCapsule.findByPk(req.params.id, {
      include: [{ model: TimeCapsule }],
    });

    const timecapsule = timecapsuleData.get({ plain: true });

    res.render('timecapsule', {
      ...timecapsule,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/quotes', async (req, res) => {
  try {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      const quote = data[0].q; // Extract the quote from the response
      const author = data[0].a; // Extract the author from the response
      // Render the 'quotes' template and pass the quote as a context
      res.render('quotes', { quote, author });
    } catch (error) {
      console.log(error);
      res.status(500).send('An error occurred.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
