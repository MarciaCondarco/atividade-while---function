numeroDaResposta=0
numeroDaResposta=parseInt(prompt("escolha a resposta das questões de 1 a 5"))
if (numeroDaResposta==1){
  numeroEscolhido=parseInt(prompt("escolha qualquer numero"))
  console.log(tabuada(numeroEscolhido))
}
else if (numeroDaResposta==2){
  console.log(somar())
}
else if(numeroDaResposta==3){
  console.log(somaDigitoUsuario())
}
else if(numeroDaResposta==4){
  numeroEscolhido = parseInt(prompt("digite a quantidade de termos"))
  console.log(fibonacci(numeroEscolhido))
}
else if(numeroDaResposta==5){
  fraseEscolhida=prompt("digite uma palavra")
  console.log(inverter(fraseEscolhida))
}
