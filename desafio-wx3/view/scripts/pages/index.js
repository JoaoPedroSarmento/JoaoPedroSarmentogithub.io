import Carrossel from "../Classes/Carrossel.js";
import SlideBanner from "../Classes/SlideBanner.js";
import Modal from "../Classes/Modal.js";
import SlideDepoimentos from "../Classes/SlideDepoimentos.js";
import listarProdutos from "../funcoes/listarProdutos.js";
import Requisicao from "../Classes/Requisicao.js";
import criarBolasCarrossel from "../funcoes/criarBolasCarrossel.js";
import { somarValoresDosProdutos } from "../funcoes/funcoesUtil.js";

(async () => {
  // fazendo requisição para a listagem dos produtos

  const req = new Requisicao();
  await req.getFetch("../../api/produtos.json", listarProdutos);

  // adicionando bolas do carrossel

  criarBolasCarrossel(document.getElementById("lancamentos"));
  criarBolasCarrossel(document.getElementById("destaques"));
  criarBolasCarrossel(document.getElementById("outlet"));

  // instânciando os slides/carrossel/banners

  const slideBanner = new SlideBanner(
    "#container-bolas .bola-interna-slide",
    3000
  );
  const carrosselLancamentos = new Carrossel("#lancamentos");
  const carrosselDestaques = new Carrossel("#destaques");
  const carrosselOutlet = new Carrossel("#outlet");
  const menuModal = new Modal("menu", "menu-modal", "flex");
  const slideDepoimentos = new SlideDepoimentos(".bola-depoimentos");

  // startando os slides/carrossel/banners
  slideDepoimentos.iniciarSlide();
  slideBanner.iniciarSlide();
  carrosselLancamentos.iniciarCarrossel();
  carrosselDestaques.iniciarCarrossel();
  carrosselOutlet.iniciarCarrossel();
  menuModal.iniciarModal();

  //adicionando valor ao carrinho
  document.getElementById("carrinho-precos").textContent =
    somarValoresDosProdutos();
})();
