import fazFetch from "../funcoes/fazFecth.js";
export default class Requisicao {
  async getFetch(url, fcCallback = null) {
    return await fazFetch("GET", url, fcCallback);
  }
  async buscarFetch(url, id) {
    const produtos = await this.getFetch(url);
    return produtos.find((produto) => produto.id == id);
  }
}
