const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveBook,
  deleteBook,
  login,
  saveTithe,
  deleteTithe,
  updateTithe
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveBook);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/books/:bookId').delete(authMiddleware, deleteBook);

router.route('/tithes/:titheId').delete(authMiddleware, deleteTithe);

router.route('/tithes').put(authMiddleware, updateTithe);

router.route('/tithe').post(saveTithe);

module.exports = router;
