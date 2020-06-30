const Usuarios = {
  _init: () => {},
  lista: () => {
    let arrUsuarios = [];
    for (let i = 0; i < 20; i++) {
      arrUsuarios.push({
        nome: faker.name.findName(),
        imagem: faker.image.avatar(),
      });
    }
    console.log({ arrUsuarios });
    return arrUsuarios;
  },
  criaLista: () => {
    const lista = document.querySelector("#usuarios-lista");
    document.querySelector("#usuarios-qtde").innerHTML =
      Tagchat.usuarios.length;
    Tagchat.usuarios.forEach((usuario) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const img = document.createElement("img");
      img.src = usuario.imagem;
      a.className = "usuario";
      a.appendChild(img);
      a.append(usuario.nome);
      li.appendChild(a);
      lista.appendChild(li);
    });
  },
};
