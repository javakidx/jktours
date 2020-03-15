const express = require('express');
const viewcontroller = require('../controllers/viewController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');
const router = express.Router();

router.use(viewcontroller.alerts);
router.get(
  '/',
  // bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewcontroller.getOverview
);
router.get('/tour/:slug', authController.isLoggedIn, viewcontroller.getTour);
router.get('/login', authController.isLoggedIn, viewcontroller.getLoginForm);
router.get('/me', authController.protect, viewcontroller.getAccount);
router.get('/my-tours', authController.protect, viewcontroller.getMyTours);
router.post(
  '/submit-user-data',
  authController.protect,
  viewcontroller.updateUserData
);
// /login

module.exports = router;
