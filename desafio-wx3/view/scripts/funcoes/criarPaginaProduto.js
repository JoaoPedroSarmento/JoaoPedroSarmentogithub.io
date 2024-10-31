import { criarCardProdutoParaPaginaDeDetalhesDoProdutoECarrinho } from "./funcoesUtil.js";

export default function criarPaginaProduto({ id, img_url, nome_produto, preco }) {
  document.body.innerHTML = "";
  document.title = nome_produto;

  const section = document.createElement("section");
  section.classList.add("produto-section");
  document.body.appendChild(section);
  const card = document.createElement("div");
  card.classList.add("card-produto");

  card.innerHTML = criarCardProdutoParaPaginaDeDetalhesDoProdutoECarrinho(img_url, nome_produto, preco , id)

  section.appendChild(card);
}
