function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = "1.png";
    document.body.style.background = "#602858";
  } else if (hora >= 12 && hora <= 18) {
    // Boa tarde!
    img.src = "2.png";
    document.body.style.background = "#348827";
  } else {
    // Boa noite!
    img.src = "3.png";
    document.body.style.background = "#194643";
  }
}
