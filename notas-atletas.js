let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];


for (let i = 0; i < atletas.length; i++){
  let atleta = atletas[i]
  console.log("Atleta: " + atleta.nome)
  console.log("Notas Obtidas: " + atleta.notas)

  let notas = atleta.notas;
  
  // ordenar as notas da maior para a menor
  notas.sort(comparaNumeros)

  // remover primeiro elemento do array (menor nota)
  notas.shift();

  // remover último elemento do array (maior nota)
  notas.pop();

  let soma = 0;
  for(let y = 0; y < notas.length; y++) {
    soma = soma + notas[y]; 
  }

  let media = soma / notas.length  
  
  // fixa as casas decimais
  media = media.toFixed(2)
  
  console.log("Média Válida " + media);
  console.log("")
}



function comparaNumeros(numeroA, numeroB){
  return numeroA - numeroB;
}