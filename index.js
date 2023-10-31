//Desafio Classificador de nível de Herói
let heroi = {
  nome: "Link",
  quantidadeXp: 2000,
};

if (heroi.quantidadeXp <= 1000) {
  mensagemNivel = "Ferro";
} else if ((heroi.quantidadeXp > 1000) & (heroi.quantidadeXp <= 2000)) {
  mensagemNivel = "Bronze";
} else if ((heroi.quantidadeXp > 2000) & (heroi.quantidadeXp <= 5000)) {
  mensagemNivel = "Prata";
} else if ((heroi.quantidadeXp > 5000) & (heroi.quantidadeXp <= 7000)) {
  mensagemNivel = "Ouro";
} else if ((heroi.quantidadeXp > 7000) & (heroi.quantidadeXp <= 8000)) {
  mensagemNivel = "Platina";
} else if ((heroi.quantidadeXp > 8000) & (heroi.quantidadeXp <= 9000)) {
  mensagemNivel = "Ascendente";
} else if ((heroi.quantidadeXp > 9000) & (heroi.quantidadeXp <= 10000)) {
  mensagemNivel = "Imortal";
} else {
  mensagemNivel = "Campeão";
}

//"O Herói de nome **{nome}** está no nível de **{nivel}**"
console.log(
  "O Herói de nome " + heroi.nome + " está no nível de " + mensagemNivel
);
