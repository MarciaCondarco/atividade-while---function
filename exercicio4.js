function fibonacci(numeroEscolhido){
    numeroEscolhido = parseInt(prompt("digite a quantidade de termos"))
    
    primeiroTermo=1
    segundoTermo=1
    cont=1
    
      
    while(cont<=numeroEscolhido){
      if(cont==1 || cont == 2){
        console.log(1)
      }
      else{
        terceiroTermo = primeiroTermo + segundoTermo
        console.log(terceiroTermo)
        primeiroTermo=segundoTermo
        segundoTermo=terceiroTermo
      }
      cont=cont+1
    }
    }