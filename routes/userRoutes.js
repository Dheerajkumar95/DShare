const express = require("express");
const {
  registerController,
  loginController,
  requireSingIn,
  updateUserController,
} = require("../controllers/userController");

//riouter object
const router = express.Router();

//routes
// REGISTER || POST
router.post("/register", registerController);
router.post("/login", loginController);
router.put("/update-user", requireSingIn, updateUserController);
//export
module.exports = router;
