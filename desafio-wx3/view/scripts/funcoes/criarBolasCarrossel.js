export default function criarBolasCarrossel(section) {
  const containerBolasCarrossel = section.querySelector(".bolas-carrossel");
  const numContainersCarrossel = section.querySelectorAll(
    ".content-container-carrossel"
  ).length;

  for (let i = 0; i < numContainersCarrossel; i += 1) {
    const bola = document.createElement("div");
    bola.classList.add("bola-carrossel");
    bola.dataset.bolaCarrossel = i + 1;

    if (i === 0) {
      bola.classList.add("bola-ativa");
    }

    containerBolasCarrossel.appendChild(bola);
  }
}
