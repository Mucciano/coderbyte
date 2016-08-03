Using the JavaScript language, have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3.



function Division(num1, num2){
oneArr = []
twoArr = []
comArr = []

for (var i = 1; i < num1; i++) {
  if (num1%i == 0){oneArr.push(i)}
}
for (var i = 1; i < num2; i++) {
  if (num2%i == 0){twoArr.push(i)}
}
for (var i = 0; i < oneArr.length; i++) {
  for (var j = 0; j < twoArr.length; j++) {
    if (oneArr[i] == twoArr[j]){comArr.push(oneArr[i])}
  }
}

counter  = (comArr.length -1)

return comArr[counter]

}
