function somaDigitoUsuario(){
    resultado = 0 
    while(true){
      numero_usuario=prompt("digite um numero:")
      
      if (numero_usuario==0){
        break
      }
      console.log("o valor atual do resultado" + resultado)
      resultado = resultado + parseInt(numero_usuario)
      console.log("o valor atual do resultado + numero_usuario" + resultado)
    }
    
    alert(resultado)
  }