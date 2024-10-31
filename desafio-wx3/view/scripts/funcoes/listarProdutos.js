let numContainersCriados = 0;

export default function listar(resp) {
  const [containerLancamentos, containerDestaques, containerOutlet] =
    document.querySelectorAll(".container-carrossel");

  let lancamentosTemp = [];
  let destaquesTemp = [];
  let outletTemp = [];

  resp.forEach((produto, index) => {
    adicionarProdutosASection(
      produto,
      index,
      lancamentosTemp,
      destaquesTemp,
      outletTemp,
      containerLancamentos,
      containerDestaques,
      containerOutlet
    );
  });

  if (lancamentosTemp.length) {
    containerLancamentos.appendChild(createDivContainer(lancamentosTemp));
  }
  if (destaquesTemp.length) {
    containerDestaques.appendChild(createDivContainer(destaquesTemp));
  }
  if (outletTemp.length) {
    containerOutlet.appendChild(createDivContainer(outletTemp));
  }
}

function adicionarProdutosASection(
  { id, img_url, nome_produto, preco },
  index,
  lancamentosTemp,
  destaquesTemp,
  outletTemp,
  containerLancamentos,
  containerDestaques,
  containerOutlet
) {
  const layoutProdutoGeral = layoutProdutoSectionPadrao(
    img_url,
    nome_produto,
    preco,
    id
  );
  const layoutProdutoLancamentos = layoutProdutoSectionLancamentos(
    img_url,
    nome_produto,
    preco,
    id
  );

  lancamentosTemp.push(layoutProdutoLancamentos);
  destaquesTemp.push(layoutProdutoGeral);
  outletTemp.push(layoutProdutoGeral);

  if (lancamentosTemp.length === 4) {
    numContainersCriados++;
    containerLancamentos.appendChild(
      createDivContainer(lancamentosTemp, index, numContainersCriados)
    );
    containerDestaques.appendChild(
      createDivContainer(destaquesTemp, index, numContainersCriados)
    );
    containerOutlet.appendChild(
      createDivContainer(outletTemp, index, numContainersCriados)
    );

    lancamentosTemp.length = 0;
    destaquesTemp.length = 0;
    outletTemp.length = 0;
  }
}

function createDivContainer(items, index, numContainersCriados) {
  const div = document.createElement("div");

  div.className =
    index === 3
      ? `content-container-carrossel  carrossel-ativo`
      : `content-container-carrossel`;
  div.dataset.carrossel = numContainersCriados;
  div.innerHTML = items.join("");
  return div;
}
function layoutProdutoSectionPadrao(img_url, nome_produto, preco, id) {
  return `<div class="item-carrossel">
            <div class="imagem" style="background-image: url('${img_url}');">
              <div class="btns">
                <div class="favoritar">
                  <img src="../desafio-wx3/view/img/coracao-2.png" width="12" alt="favoritar imagem">
                  <span>FAVORITAR</span>
                </div>
                <div class="espiar">
                  <img src="../desafio-wx3/view/img/olho.png" width="18" alt="espiar foto">
                  <span>ESPIAR</span>
                </div>
              </div>
            </div>
            <div class="content-container-flex">
              <div class="estrelas">
                <img src="../desafio-wx3/view/img/icons8-estrela-48.png" alt="estrela" class="estrela">
                <img src="../desafio-wx3/view/img/icons8-estrela-48.png" alt="estrela" class="estrela">
                <img src="../desafio-wx3/view/img/icons8-estrela-48.png" alt="estrela" class="estrela">
                <img src="../desafio-wx3/view/img/icons8-estrela-48.png" alt="estrela" class="estrela">
                <img src="../desafio-wx3/view/img/icons8-estrela-48.png" alt="estrela" class="estrela">
              </div>
              <div class="textos">
                <p>${nome_produto}</p>
                <p>ref.:pdc 202</p>
              </div>
            </div>
            <div class="textos">
              <div class="preco">
                <h3>R$ ${preco}</h3>
                <span class="boleto">no boleto</span>
                <span>em até 10x de ${(preco / 10).toFixed(2)}</span>
              </div>
              <a href="../desafio-wx3/produto.html?id=${id}" class="compre-agora">COMPRE AGORA</a>
            </div>
          </div>`;
}

function layoutProdutoSectionLancamentos(img_url, nome_produto, preco, id) {
  return `<div class="item-carrossel">
            <div class="imagem" style="background-image: url('${img_url}');">
              <div>
                <h4 class="lancamento">Lançamento</h4>
              </div>
              <div class="btns">
                <div class="favoritar">
                  <img src="../desafio-wx3/view/img/coracao-2.png" width="12" alt="favoritar imagem">
                  <span>FAVORITAR</span>
                </div>
                <div class="espiar">
                  <img src="../desafio-wx3/view/img/olho.png" width="18" alt="espiar foto">
                  <span>ESPIAR</span>
                </div>
              </div>
            </div>
            <div class="content-container-flex">
              <div class="estrelas">
                <img src="../desafio-wx3/view/img/icons8-estrela-48.png" alt="estrela" class="estrela">
                <img src="../desafio-wx3/view/img/icons8-estrela-48.png" alt="estrela" class="estrela">
                <img src="../desafio-wx3/view/img/icons8-estrela-48.png" alt="estrela" class="estrela">
                <img src="../desafio-wx3/view/img/icons8-estrela-48.png" alt="estrela" class="estrela">
                <img src="../desafio-wx3/view/img/icons8-estrela-48.png" alt="estrela" class="estrela">
              </div>
              <div class="textos">
                <p>${nome_produto}</p>
                <p>ref.:pdc 202</p>
              </div>
            </div>
            <div class="textos">
              <div class="preco">
                <h3>R$ ${preco}</h3>
                <span class="boleto">no boleto</span>
                <span>em até 10x de ${(preco / 10).toFixed(2)}</span>
              </div>
              <a href="../desafio-wx3/produto.html?id=${id}" class="compre-agora">COMPRE AGORA</a>
            </div>
          </div>`;
}
