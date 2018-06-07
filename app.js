function isValidCard(){
for (var i = 0; i < 1; i = i){
  var cardNumber = prompt('Insira aqui o número de seu cartão de crédito.');
    if((cardNumber / 1) == parseInt(cardNumber) && cardNumber != 0){
    i++;
  } else{
    alert('Insira somente números.');
  }
}
