jQuery(document).ready(function() {
  const sentence = prompt("Enter a sentence:");
  console.log(sentence);
  const newSentence = sentence.charAt(0, -1).toUpperCase;
  console.log(newSentence);
});
