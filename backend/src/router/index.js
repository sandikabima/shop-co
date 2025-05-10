const express = require("express");
const router = express.Router();
const controllerAuth = require("../controllers/auth/auth-controller");

router.post("/api/v1/register", controllerAuth.register);
router.post("/api/v1/login", controllerAuth.login);
router.delete("/api/v1/logout", controllerAuth.logout);
router.get("/api/v1/token", controllerAuth.refreshToken);


module.exports = router;
