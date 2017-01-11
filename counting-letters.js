function countLetters (sentence) {
  var allLetters = {};

  for (var i = 0; i < sentence.length; i++) {
    var letter = sentence.charAt(i);

    if(allLetters[letter] === undefined) {
      allLetters[letter] = 1;
    } else {
      allLetters[letter] = allLetters[letter] + 1;
    }
  }
  return allLetters
}

var question = 'lighthouse in the house';
var finalQuestion = question.replace(/ /g,'').toLowerCase();
console.log(countLetters(finalQuestion));

// var o = {}

// o.key = 1;
// o['key'] = 1;

// var letter = 'key';
// o[letter] = 1;

// wont work o.letter = 1 CREATES key called letter