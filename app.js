function isValidCard(){
for (var i = 0; i < 1; i = i){
  var cardNumber = prompt('Insira aqui o número de seu cartão de crédito.');
    if((cardNumber / 1) == parseInt(cardNumber) && cardNumber != 0){
    i++;
  } else{
    alert('Insira somente números.');
  }
}
var numberValidation = cardNumber.split('');
numberValidation = numberValidation.reverse();

var luhnCheck = 0;
  for(var j = 0; j < numberValidation.length; j++){
    luhnCheck = luhnCheck + parseInt(numberValidation[j]);
    if((numberValidation[j + 1] * 2) > 9){
      luhnCheck = luhnCheck + (numberValidation[j + 1] * 2 - 9);
      j++;
    } else{
      luhnCheck = luhnCheck + (numberValidation[j + 1] * 2);
      j++;
    }
  }
  if(luhnCheck % 10 === 0){
  document.getElementById('valid').innerHTML = 'Oba! O cartão de crédito inserido é valido.'
  } else {
  document.getElementById('notValid').innerHTML = 'Eita. O cartão de crédito inserido não é válido.'
  }
}
isValidCard();
