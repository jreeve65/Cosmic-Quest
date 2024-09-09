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
router.route('/').post(createUser).put(saveGame);

router.route('/login').post(login);

router.route('/me').get(getSingleUser);

router.route('/event').post(loadGame);
router.route('/event/:EventId').delete(deleteSave);


module.exports = router;
