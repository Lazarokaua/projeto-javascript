let nivel;

//PascalCase
//camelCase

function saldoDeVitorias(vitorias, derrotas) {
  let saldoWins = vitorias - derrotas


  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias > 10 && vitorias < 21) {
    nivel = "Bronze";
  } else if (vitorias > 20 && vitorias < 51) {
    nivel = "Prata";
  } else if (vitorias > 50 && vitorias < 81) {
    nivel = "Ouro";
  } else if (vitorias > 80 && vitorias < 91) {
    nivel = "Diamante";
  } else if (vitorias > 90 && vitorias < 101) {
    nivel = "lendario";
  } else {
    nivel = "Imortal";
  }

  let mensagem = `O Herói tem de saldo de ${saldoWins} vitorias. Está no nível de ${nivel}`

  return mensagem
}

console.log(saldoDeVitorias(31,10))

/* 
 Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 
*/
