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

  // Atleta: Cesar Abascal
  //Notas Obtidas: 10,10,7.88,8.42,9.34
  //Média Válida: 8.766666666666666
  var notas = atleta.notas;
  var soma = 0;
  
  for(var y = 0; y < notas.length; y++) {
    soma += notas[y]; 
  }
  let media = soma / notas.length   

  
  console.log("Média Válida " + media);
  console.log("")
}
