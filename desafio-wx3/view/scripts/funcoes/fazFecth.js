export default async function fazFetch(
  metodo,
  url,
  fcCallback = null,
  dados = null
) {
  let configMetodo = trataMetodo(metodo, dados);
  const meuFetch = fetch(url, configMetodo)
    .then((resposta) => verificaErro(resposta))
    .then((resposta) => resposta.json())
    .then((resposta) => {
      if (fcCallback) {
        fcCallback(resposta);
        return;
      }
      return resposta;
    })
    .catch((e) => {
      return {
        error: e,
      };
    });
  return meuFetch;
}

function verificaErro(resp) {
  if (!resp.ok) {
    throw new Error(resp.status + " - " + resp.statusText);
  }
  return resp;
}

function trataMetodo(metodo, dados) {
  let configMetodo = null;

  if (metodo !== "GET") {
    configMetodo = {
      method: metodo,
      body: JSON.stringify(dados),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
  } else {
    configMetodo = {
      method: metodo,
      body: dados,
    };
  }

  return configMetodo;
}
