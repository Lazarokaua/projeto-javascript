let nivel= 10000;
let heroi = "alber";
if (nivel < 1000) {
  return console.log("ferro");
} else if (nivel > 1001 && nivel < 2000)  {
  return console.log("bronze");
} else if (nivel > 2001 && nivel < 5000)  {
  return console.log("prata");
} else if (nivel > 5001 && nivel < 7000)  {
    return console.log("ouro")
}else if (nivel > 7001 && nivel < 8000)    {
    return console.log("platina")
}else if (nivel > 8001 && nivel < 9000)    {
    return console.log("ascendente")
}else if (nivel > 9001 && nivel < 1000)    {
    return console.log("imortal")
}else {
    console.log("radiante")
}

const mensagem = `O Herói de nome ${heroi} está no nível${nivel}`
console.log(mensagem)