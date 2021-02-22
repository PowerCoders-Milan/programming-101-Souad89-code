//insert your pseudocode below
/*
- create a variable represent the day in the birthdate. 
- create a variable represent the month in the birthdate.
- prompt a message for the user to insert his birthdate.
- Find the number of the birthdate between [1,365].
- Check the date to retrive month_date.
   - equation: previous months + day_date.
- print it out.
*/

//Insert your code below
var day, month, Outcome;


day = Number(window.prompt('Please enter you birth day!'));
month = window.prompt('Please enter your birth month!');
if (month == 'January') {
  Outcome = 0 + day;
}
if (month == 'February') {
  Outcome = 31 + day;
}
if (month == 'March') {
  Outcome = 59 + day;
}
if (month == 'April') {
  Outcome = 90 + day;
}
if (month == 'May') {
  Outcome = 120 + day;
}
if (month == 'June') {
  Outcome = 151 + day;
}
if (month == 'July') {
  Outcome = 181 + day;
}
if (month == 'August') {
  Outcome = 212 + day;
}
if (month == 'September') {
  Outcome = 243 + day;
}
if (month == 'October') {
  Outcome = 273 + day;
}
if (month == 'November') {
  Outcome = 304 + day;
}
if (month == 'December') {
  Outcome = 334 + day;
}
window.alert(Outcome);