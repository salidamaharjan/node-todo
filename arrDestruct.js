function sumAndMul(a, b) {
    return [a+b, a*b];
  }
  const result = sumAndMul(2, 3);
  console.log(result);
  
  const[sum, mult] = sumAndMul(6,3);

const person1 = {
  name: "Salida",
  add: "MN"
}
const person2 = {
  name: "ABC",
  add: "xyz"
}
const{name, favoriteFood = "momo"} = person1;
console.log(name);
console.log(favoriteFood);

