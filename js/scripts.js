jQuery(document).ready(function() {
  const sentence = prompt("Enter a sentence:");
  console.log(sentence);
  const char1 = sentence.charAt(0).toUpperCase();
  const char2 = sentence.charAt(sentence.length - 1).toUpperCase();
  
  console.log(char2 + char1);

});
