function checar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("tsexo");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "menina.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "jovem-mulher.png");
      } else if (idade < 60) {
        // adulto
        img.setAttribute("src", "mulher.png");
      } else {
        // idoso
        img.setAttribute("src", "idosa.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "menino.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "jovem.png");
      } else if (idade < 60) {
        // adulto
        img.setAttribute("src", "homem.png");
      } else {
        // idoso
        img.setAttribute("src", "idoso.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `${gênero} com ${idade} anos.<br />`;
    res.appendChild(img);
  }
}
