import {
  criarCardProdutoParaPaginaDeDetalhesDoProdutoECarrinho,
  somarValoresDosProdutos,
} from "../funcoes/funcoesUtil.js";

export default function criarPaginaCarrinho() {
  document.body.innerHTML = "";
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const container = document.createElement("div");
  container.className = "produto-section";

  carrinho.forEach((produto) => {
    const { img, nome, preco, id } = produto;
    const cardProdutoHTML =
      criarCardProdutoParaPaginaDeDetalhesDoProdutoECarrinho(
        img,
        nome,
        preco,
        id,
        true
      );

    const cardProdutoDiv = document.createElement("div");
    cardProdutoDiv.classList.add("card-produto");
    cardProdutoDiv.innerHTML = cardProdutoHTML;

    container.appendChild(cardProdutoDiv);
  });

  const totalSection = document.createElement("div");
  const total = somarValoresDosProdutos();
  totalSection.innerHTML = `<h2>Total carrinho: R$ ${total.toFixed(2)}</h2>`;
  totalSection.classList.add("total-section");
  document.body.append(totalSection, container);
}
