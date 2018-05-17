const loginController = (req, res) => {
  console.log("Entrou", req.body);
  const email = req.body.usuario.email,
    nome = req.body.usuario.nome;
  if (email && nome) {
    var usuario = req.body.usuario;
    usuario["contatos"] = [];
    req.session.usuario = usuario;
    res.redirect("/contatos");
  } else {
    res.redirect("/");
  }
};
module.exports = loginController;
