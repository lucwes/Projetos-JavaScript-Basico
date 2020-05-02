function calcular() {
  let inicio = document.getElementById("inicio");
  let fim = document.getElementById("fim");
  let passo = document.getElementById("passo");
  let resultado = document.getElementById("resultado");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert("[ERRO] Faltam dados!");
  } else {
    resultado.innerHTML = `Contando: <br /><br />`;
    contador = Number(inicio.value);
    final = Number(fim.value);
    pass = Number(passo.value);
    if (contador <= final) {
      while (contador <= final) {
        resultado.innerHTML += `${contador} \u{1f449} `;
        contador += pass;
      }
    } else {
      while (final <= contador) {
        resultado.innerHTML += `${contador} \u{1f449} `;
        contador -= pass;
      }
    }
  }
  resultado.innerHTML += `\u{1f3c1}`;
}
