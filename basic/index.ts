const numberOne = document.getElementById("numOne")! as HTMLInputElement;
const numberTwo = document.getElementById("numTwo")! as HTMLInputElement;
const addBtn = document.getElementById("addBtn")! as HTMLButtonElement;

const addFunc = (num1: number, num2: number): number => {
  return num1 + num2;
};

addBtn.addEventListener("click", () =>
  alert(addFunc(+numberOne.value, +numberTwo.value))
);
