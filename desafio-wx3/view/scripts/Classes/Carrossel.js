export default class Carrossel {
  constructor(seletorCarrossel) {
    this.carrosselContainer = document.querySelector(seletorCarrossel);
    this.botoesCarrossel =
      this.carrosselContainer.querySelector(".botoes-carrossel");
    this.setasEsquerda = this.botoesCarrossel.querySelector(".seta-esquerda");
    this.setasDireita = this.botoesCarrossel.querySelector(".seta-direita");
    this.contentContainers = this.carrosselContainer.querySelectorAll(
      ".content-container-carrossel"
    );
    this.bolasCarrossel =
      this.carrosselContainer.querySelectorAll(".bola-carrossel");
    this.verTodos = this.carrosselContainer.querySelector(".ver-todos");

    this.indexAtivo = 0;
    this.ativarTodos = false;

    this.setasEsquerda.addEventListener("click", () =>
      this.mudarParaEsquerda()
    );
    this.setasDireita.addEventListener("click", () => this.mudarParaDireita());
    this.bolasCarrossel.forEach((bola, index) => {
      bola.addEventListener("click", () => this.mudarParaBola(index));
    });

    this.ativarVerTodosProdutos();
  }

  iniciarCarrossel() {
    this.atualizarCarrossel();
  }

  atualizarCarrossel(ativarTodos = false) {
    this.contentContainers.forEach((container, index) => {
      container.classList.remove("carrossel-ativo");
      if (index === this.indexAtivo || (ativarTodos && this.ativarTodos)) {
        container.classList.add("carrossel-ativo");
      }
    });

    this.bolasCarrossel.forEach((bola, index) => {
      bola.classList.remove("bola-ativa");
      if (index === this.indexAtivo) {
        bola.classList.add("bola-ativa");
      }
    });
  }

  mudarParaEsquerda() {
    this.indexAtivo =
      this.indexAtivo === 0
        ? this.contentContainers.length - 1
        : this.indexAtivo - 1;
    this.atualizarCarrossel();
  }

  mudarParaDireita() {
    console.log("CLIQUE D")
    this.indexAtivo =
      this.indexAtivo === this.contentContainers.length - 1
        ? 0
        : this.indexAtivo + 1;
    this.atualizarCarrossel();
  }

  mudarParaBola(index) {
    this.indexAtivo = index;
    this.atualizarCarrossel();
  }

  ativarVerTodosProdutos() {
    this.verTodos.addEventListener("click", () => {
      this.ativarTodos = !this.ativarTodos;

      if (this.ativarTodos) {
        this.atualizarCarrossel(true);
        this.verTodos.innerHTML = `<h3 class="ver-todos"><span>Ver</span> menos</h3>`;
        this.botoesCarrossel.style.display = "none";
      } else {
        this.indexAtivo = 0;
        this.atualizarCarrossel();
        this.verTodos.innerHTML = `<h3 class="ver-todos"><span>Ver</span> todos</h3>`;
        this.botoesCarrossel.style.display = "flex";
      }
    });
  }
}
