/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

function suffixCipher(sentence, cipher) {
  let arr = sentence.split(' ');
  let newArr = [];
  let suffixes = Object.keys(cipher);
  let callbacks = Object.values(cipher);
  let cb1 = callbacks[0];
  let cb2 = callbacks[1];

      for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val.includes(suffixes[0])) {
          let word = cb1(val);
          newArr.push(word);
        }
        else if (val.includes(suffixes[1])) {
          let word = cb2(val);
          newArr.push(word);
        }
        else {
          newArr.push(val);
        }

   }
  return newArr.join(" ");
}


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = suffixCipher;
} catch(e) {
  return null;
}
