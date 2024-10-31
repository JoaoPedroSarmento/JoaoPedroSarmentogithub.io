export default class SlideDepoimentos {
  constructor(nomeBola) {
    this.bolas = document.querySelectorAll(nomeBola);
  }
  iniciarSlide() {
    this.bolas.forEach((bola) => {
      bola.addEventListener("click", () => {
        this.mudarSlide(bola, bola.dataset.slide);
      });
    });
  }
  mudarSlide(bola, slideAtual) {
    this.mudarDepoimento(slideAtual, bola);
  }

  alterarBola(bola) {
    const divAtual = document.querySelector(".bola-ativa-depoimentos");
    if (divAtual) {
      divAtual.classList.remove("bola-ativa-depoimentos");
    }

    if (bola) {
      bola.classList.add("bola-ativa-depoimentos");
    }
  }

  mudarDepoimento(num, bola) {
    const depoimentos = document
      .getElementById("depoimentos")
      .querySelectorAll(".container-depoimentos");

    if (num > depoimentos.length) num = 1;

    const depoimento = document.querySelector(
      `[data-slide-depoimento='${num}']`
    );
    const depoimentoAtivo = document.querySelector(
      ".container-depoimento-ativado"
    );

    if (depoimentoAtivo) {
      depoimentoAtivo.classList.remove("container-depoimento-ativado");
      depoimentoAtivo.classList.add("container-depoimento-desativado");
    }

    if (depoimento) {
      depoimento.classList.add("container-depoimento-ativado");
      depoimento.classList.remove("container-depoimento-desativado");
    }

    this.alterarBola(bola);
  }
}
