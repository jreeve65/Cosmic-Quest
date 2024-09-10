const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveGame,
  loadGame,
  login,
  deleteSave,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveGame);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/event').post(loadGame);
router.route('/event/:EventId').delete(authMiddleware, deleteSave);


module.exports = router;
