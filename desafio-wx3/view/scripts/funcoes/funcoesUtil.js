function criarCardProdutoParaPaginaDeDetalhesDoProdutoECarrinho(
  img_url,
  nome_produto,
  preco,
  id,
  pagCarrinho = false
) {
  return `
      <img src="${img_url}" alt="${nome_produto}" class="imagem-produto">
      <div class="info-produto">
          <h3 class="nome-produto">${nome_produto}</h3>
          <p class="preco-produto">R$ ${preco}</p>
         <div class="btns">
          ${
            !pagCarrinho
              ? `<button class="btn-carrinho" data-id="${id}">Adicionar ao carrinho</button>`
              : ""
          }
          <a href="./">
            <button class="voltar">Voltar</button>
          </a>
        </div>
         </div>
      </div>
  `;
}

function somarValoresDosProdutos() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  return carrinho.length
    ? carrinho.reduce((soma, produto) => {
        return soma + produto.preco;
      }, 0)
    : "0.00";
}

export {
  criarCardProdutoParaPaginaDeDetalhesDoProdutoECarrinho,
  somarValoresDosProdutos,
};
