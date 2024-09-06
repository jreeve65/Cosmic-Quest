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
router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/me').get(authMiddleware, loadGame);
router.route('/me').post(authMiddleware, saveGame);
router.route('/me').delete(authMiddleware, deleteSave);


module.exports = router;
