//insert your pseudocode below
/*
- Create variable to save a set of digits.
- Sort the numbers in a numerical (assending) order.
- print them in this order. 
*/

//insert your code below
var num;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


num = [8, 2, 4];
window.alert(num.slice().sort(listsGetSortCompare("NUMERIC", 1)));
