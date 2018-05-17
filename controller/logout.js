const logoutController = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
module.exports = logoutController;
