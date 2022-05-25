const { User } = require("../models")

const userController = {
  // Index Users
  indexUsers(req, res) {
    User.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err)
        res.status(400),json(err)
      })
  },

  // Create a User
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err))
  }
}

module.exports = userController