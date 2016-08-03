
Using the JavaScript language, have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters.



function StringScramble(str1,str2) {
  Arr1 = Array.from(str1)
  Arr2 = Array.from(str2)
  shareArr = []

  count = 0

for (var i = 0; i < Arr1.length; i++) {
  for (var j = 0; j < Arr2.length; j++) {
    if (Arr1[i] == Arr2[j]){
        shareArr.push(Arr1[i])
      }
  }
}

for (var i = 0; i < Arr2.length; i++) {
  if (!shareArr.includes(Arr2[i])){ count +=1  }
}

if (count > 0) {console.log("false")}
else {console.log("true")}
}
