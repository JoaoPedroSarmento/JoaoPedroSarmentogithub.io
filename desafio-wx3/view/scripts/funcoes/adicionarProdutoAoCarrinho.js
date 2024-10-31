export default function adicionarProdutoAoCarrinho({
  preco,
  nome_produto,
  img_url,
}) {
  document.querySelector(".btn-carrinho").addEventListener("click", () => {
    const produto = { nome: nome_produto, preco, img: img_url };

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produto);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(` "${nome_produto}" foi adicionado ao carrinho!`);
  });
}
