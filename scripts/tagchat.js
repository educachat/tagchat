const Tagchat = {
  _init: () => {
    Tagchat.usuarios = Usuarios.lista();
    Usuarios.criaLista();

    Tagchat.tags = Tags.lista();
    Tagchat.tags.push({ tag: "Tudo", qtde: 1 });
    Tagchat.tags.push({ tag: "#Aluno", qtde: 22 });
    Tags.criaLista("#tag-mais-recente", "tag");
    // Tags.criaLista("#tag-mais-usada", "qtde");

    Tags._init();
  },
  tags: [],
  usuarios: [],
};

Tagchat._init();
