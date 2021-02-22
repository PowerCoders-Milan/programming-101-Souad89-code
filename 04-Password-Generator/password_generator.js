//insert your pseudocode below
/*
-create a varaible represent the English alphabet(28 letters).
-craete a variable represent the special characters on the keyboard.
-generate a random integer which consists of 6 digits.
-generatre a password from selecting one leeter, one special character and six numbers.
-print out the random password for the user. 
*/

//insert your code below
var alphabet, special_characters, password;

function textRandomLetter(text) {
  var x = Math.floor(Math.random() * text.length);
  return text[x];
}

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


alphabet = 'abcdefghijklmnopqrstuvwxyz';
special_characters = '?&_@"%#$£.,:;';
password = [textRandomLetter(alphabet),textRandomLetter(special_characters),mathRandomInt(100000, 999999)].join('');
window.alert(password);
