let computerNumber;
let userNumbers = []; //array para armazenar numeros
let attemps = 0;
let maxGuesses = 10;



function newGame(){
    window.location.reload()
}



function init() {
  computerNumber = Math.floor(Math.random() * 100 + 1); // gerando numeros randomicos
  //console.log(computerNumber)
}
function compareNumber() {
  // função para receber os numeros
  const userNumber = Number(document.getElementById("inputBox").value); // recebendo os valores do html
  userNumbers.push(" " + userNumber); // inserindo os numeros digitados para o array

  document.getElementById("guesses").innerHTML = userNumbers; // devolvendo os valores para o campo guesses

  if (attemps < maxGuesses) {//passando uma verificação de quantidades de tentativas
    if (userNumber > computerNumber) {
      document.getElementById("textOutput").innerHTML =
        "Your Number is too High";
      document.getElementById("inputBox").value = " "; //limpando o imputbox automaticamente
      attemps++;
      document.getElementById("attempts").innerHTML = attemps;
    } else if (userNumber < computerNumber) {
      document.getElementById("textOutput").innerHTML =
        "Your Number is too Low";
      document.getElementById("inputBox").value = " "; //limpando o imputbox automaticamente
      attemps++;
      document.getElementById("attempts").innerHTML = attemps;
    } else {
      document.getElementById("textOutput").innerHTML =
        "Well Done, thats right .... Congratulations";
      attemps++;
      document.getElementById("attempts").innerHTML = attemps;
      document.getElementById('inputBox').setAttribute('Readonly' , 'Readonly')
    }
  } else {//caso exceda o numero de tentativas 
    document.getElementById("textOutput").innerHTML =
      "You Lose! the computer number was " + computerNumber;
      document.getElementById('inputBox').setAttribute('Readonly' , 'Readonly')
  }
}
