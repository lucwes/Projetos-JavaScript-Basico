function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();
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
