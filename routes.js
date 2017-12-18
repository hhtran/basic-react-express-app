var express = require("express");
var router = express.Router();
const {
  indexUsers,
  createUser,
  showUser,
  updateUser,
  deleteUser
} = require("./controllers/UsersController");
const { catchErrors } = require("./errorHandlers");

// Users
router.get("/users", catchErrors(indexUsers));
router.post("/users", catchErrors(createUser));
router.get("/users/:username", catchErrors(showUser));
router.patch("/users/:username", catchErrors(updateUser));
router.delete("/users/:username", catchErrors(deleteUser));

// Dogs
router.get("/dogs", function(req, res, next) {
  res.json([
    {
      username: "bit la"
    },
    {
      username: "casey"
    }
  ]);
});

module.exports = router;
