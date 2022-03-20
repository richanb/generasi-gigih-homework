"use strict";

var students = [{
  name: "Alice",
  age: 20
}, {
  name: "Bob",
  age: 21
}, {
  name: "Jane",
  age: 20
}];

var renderTable = function renderTable() {
  students.forEach(function (_ref) {
    var name = _ref.name,
        age = _ref.age;
    var table = document.getElementById("data").getElementsByTagName("tbody")[0]; //stackoverflow

    table.insertRow().innerHTML = "<td>".concat(name, "</td><td>").concat(age, "</td>");
  });
}; // a function to calculate avg age


var calcAvgAge = function calcAvgAge(students) {
  var total = students.reduce(function (acc, student) {
    return acc + student.age;
  }, 0);
  return total / students.length;
}; // callback function when button clicked


var handleClick = function handleClick() {
  var avg = calcAvgAge(students);
  document.getElementById("avg").innerHTML = avg;
}; // add onclick listener


document.getElementById("calcButton").addEventListener("click", handleClick); //run render table

renderTable();