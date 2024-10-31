import Requisicao from "../Classes/Requisicao.js";
import adicionarProdutoAoCarrinho from "../funcoes/adicionarProdutoAoCarrinho.js";
import criarPaginaProduto from "../funcoes/criarPaginaProduto.js";

(async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  console.log(id);
  if (id) {
    const req = new Requisicao();
    const produto = await req.buscarFetch("desafio-wx3/../../api/produtos.json", id);
    console.log(produto);
    await criarPaginaProduto(produto);
    adicionarProdutoAoCarrinho(produto);
  }
})();
