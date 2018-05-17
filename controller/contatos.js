const contatosControler = (req, res) => {
  res.render("home/contatos", { params: req.session.usuario.nome });
};

module.exports = contatosControler;
