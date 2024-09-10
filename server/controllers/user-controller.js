// import user model
const { User,Event } = require("../models");
// import sign token function from auth
const { signToken } = require("../utils/auth");

module.exports = {
  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [
        { _id: user ? user._id : params.id },
        { username: params.username },
      ],
    });

    if (!foundUser) {
      return res
        .status(400)
        .json({ message: "Cannot find a user with this id!" });
    }

    res.json(foundUser);
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong password!" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // save a game to a user's `gamestate` field 
  // user comes from `req.user` created in the auth middleware function
  async saveGame(req, res) {
    try {
      const newGameState = await User.findOneAndUpdate(
        { _id: req.body.id},
        { $set: { gameState: body } }, //what should we call this and how is it generated actually
        { new: true, runValidators: true }
      );
      return res.json(newGameState);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  async loadGame( req, res) {
    try {
      const userInfo = await User.findOne({_id:req.body.id});
      console.log(userInfo);
      const gameState = await Event.findOne({ _id: userInfo.gameState });
      return res.json(gameState);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  // delete the game state`
  async deleteSave({ user }, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $unset: { gameState: "",} }, //want help on this tbh
      { new: true }
    );
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedUser);
  },
};
