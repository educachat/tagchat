const Tags = {
  _init: () => {
    Tags.selecionaTag();
  },

  desselecionaTag: () => {
    const tags = document.querySelectorAll(".tag");
    tags.forEach((tag) => {
      console.log({ tag });
      tag.classList.remove("ativado");
    });
  },

  selecionaTag: () => {
    const tags = document.querySelectorAll(".tag");
    tags.forEach((tag) => {
      tag.addEventListener("click", function (ev) {
        ev.preventDefault();
        const self = this;
        Tags.desselecionaTag();

        const classes = self.classList.value.split(" ");
        const classeSelecionada = classes.filter((classe) => {
          const arr = classe.split("-");
          if (arr[0] === "tag" && arr[1] !== undefined) return classe;
        });
        const elementos = document.querySelectorAll(`.${classeSelecionada[0]}`);
        elementos.forEach((el) => {
          el.classList.toggle("ativado");
        });
      });
    });
  },

  lista: () => {
    let arrTags = [];
    for (let i = 0; i < 15; i++) {
      arrTags.push({
        tag: `#${faker.random.word().split(" ")[0]}`,
        qtde: parseInt(Math.random() * 100),
      });
    }
    console.log({ arrTags });
    return arrTags;
  },
  criaLista: (elemento, ordem) => {
    const lista = document.querySelector(elemento);
    Tagchat.tags.sort(function (a, b) {
      if (a[ordem] > b[ordem]) {
        return 1;
      }
      if (a[ordem] < b[ordem]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    Tagchat.tags.forEach((tag) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const span = document.createElement("span");
      span.className = "badge";
      span.innerHTML = tag.qtde;
      a.classList.add("tag", `tag-${tag.tag.substr(1)}`);
      a.append(tag.tag);
      a.appendChild(span);
      li.appendChild(a);
      lista.appendChild(li);
    });
  },
};
