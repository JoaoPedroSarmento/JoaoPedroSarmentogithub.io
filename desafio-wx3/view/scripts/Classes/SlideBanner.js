export default class SlideBanner {
  constructor(nome, tempo) {
    this.bolas = document.querySelectorAll(nome);
    this.tempo = tempo;
    this.intervalo = null;

    this.bolas.forEach((bola) => {
      bola.addEventListener("click", () => {
        this.mudarSlide(bola, bola.dataset.slide);
        this.pararSlide();
      });
    });
  }

  iniciarSlide() {
    if (this.tempo && this.tempo > 0) {
      this.intervalo = setInterval(() => {
        const bannerAtivadoNum = document.querySelector(".banner-ativado");
        const proximoBanner = +bannerAtivadoNum.dataset.banner + 1;
        this.mudarBanner(
          proximoBanner,
          this.bolas[(proximoBanner - 1) % this.bolas.length]
        );
      }, this.tempo);
    }
  }

  pararSlide() {
    clearInterval(this.intervalo);
  }

  mudarSlide(bola, slideAtual) {
    this.mudarBanner(slideAtual, bola);
  }

  alterarBola(bola) {
    const divAtual = document.querySelector(".bola-externa-slide");
    if (divAtual) {
      divAtual.classList.remove("bola-externa-slide");
    }

    if (bola) {
      const elemPai = bola.closest(".container-bola");
      elemPai.classList.add("bola-externa-slide");
    }
  }

  mudarBanner(num, bola) {
    const banners = document
      .getElementById("banners")
      .querySelectorAll(".banner");

    if (num > banners.length) num = 1;

    const banner = document.querySelector(`[data-banner='${num}']`);
    const bannerAtivo = document.querySelector(".banner-ativado");

    if (bannerAtivo) {
      bannerAtivo.classList.remove("banner-ativado");
      bannerAtivo.classList.add("banner-desativado");
    }

    if (banner) {
      banner.classList.add("banner-ativado");
      banner.classList.remove("banner-desativado");
    }

    this.alterarBola(bola);
  }
}
