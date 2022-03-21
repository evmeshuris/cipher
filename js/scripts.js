jQuery(document).ready(function() {
  const sentence = prompt("Enter a sentence:");
  console.log(sentence);

  function newString(string) {
    const char1 = string.charAt(0).toUpperCase();
    const char2 = string.charAt(sentence.length - 1).toUpperCase();
    const twoLetters = char2.concat(char1);
    console.log(twoLetters);
    return twoLetters
  };
  const alltogether = newString(sentence);
  
  console.log(sentence + alltogether)
  
  let length = sentence.length;
  console.log(length);
  document.getElementById("demo").innerHTML = length;
  
  let divided = (length / 2) - 1;
  divided.toFixed(0);
  console.log(divided);

  let char3 = sentence.charAt(divided);
  console.log(char3);

  
  // function newSentence(string) {
  //   console.log(sentence.concat(char2 + char1));
  // }

  // newSentence();

  // const char1 = sentence.charAt(0).toUpperCase();
  // const char2 = sentence.charAt(sentence.length - 1).toUpperCase();
  
  // console.log(char2 + char1);

});

