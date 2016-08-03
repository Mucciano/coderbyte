// Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.

function PalindromeTwo(str){
 senArr = Array.from(str)
 punctArr =[]
 testArr =[]
 palArr = []
 for (var i = 0; i < senArr.length; i++) {
   if ('a' <= senArr[i] && senArr[i] <= 'z' || 'A' <= senArr[i] && senArr[i] <= 'Z')
  { testArr.push(senArr[i]);
  palArr.push(senArr[i])}

 else{ punctArr.push(senArr[i])

 }
}
 palArr.reverse()

 if(testArr.join().toUpperCase() == palArr.join().toUpperCase()){return "true"}
   else {return "false"}
}
