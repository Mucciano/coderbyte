// Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.


function RunLength(str) {

baseArr = Array.from(str)
countArr = []
countVar = 1

for (var i = 0; i < baseArr.length; i++) {

if(baseArr[i]==baseArr[i+1]){countVar++}
if(baseArr[i]!=baseArr[i+1]){countArr.push(countVar + baseArr[i]) countVar=1}

  console.log(countArr);
}
return countArr.join('')
}
