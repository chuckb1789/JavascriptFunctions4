var addNumbers = function (str) {
  var value = str.split('');
  var numbers = []
  for (var i=0; i<value.length; i++){
    if ((value[i]%2 === 0 || value[i]%2 === 1) && (value[i+1]%2 === 0 || value[i+1]%2 === 1)) {
        numbers.push(value[i]+value[i+1]);
    } else if((value[i]%2 === 0 || value[i]%2 === 1) && value[i-1]%2 != 0 && value[i-1]%2 != 1) {
        numbers.push(value[i]);
    }
  }
  console.log(numbers)
  var sum = numbers.reduce(function(a,b){
    // return parseInt(a) + parseInt(b);
    return +a + +b;
  });
  return sum
}

console.log(addNumbers('55Hello'));
console.log(addNumbers('5Hello5'));
console.log(addNumbers('88Hello 3World'));

var longestWord = function (str) {
  var words = str.split(' ');
  var longWord = ""
  for (var i=0; i<words.length; i++) {
      if (words[i].length>longWord.length) {
          longWord = words[i]
      }
    }
    return longWord;
  }

console.log(longestWord('Super Duper Cali Fragilistic'));
