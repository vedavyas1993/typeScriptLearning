var numberOne = document.getElementById("numOne");
var numberTwo = document.getElementById("numTwo");
var addBtn = document.getElementById("addBtn");
var addFunc = function (num1, num2) {
    return num1 + num2;
};
addBtn.addEventListener("click", function () {
    return alert(addFunc(+numberOne.value, +numberTwo.value));
});
