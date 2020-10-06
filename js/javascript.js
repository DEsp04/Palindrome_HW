function palindromeCheck() {
  let str = document.checker.palindrome.value;

  let pElement = document.createElement("P");
  let content = document.createTextNode(str + " is a palindrome");
  let contentTwo = document.createTextNode(str + " is not a palindrome");

  document.getElementById("ansbox").innerHTML = "";

  if (str == str.split("").reverse().join("")) {
    pElement.appendChild(content);
    document.getElementById("ansbox").appendChild(pElement);
  } else {
    pElement.appendChild(contentTwo);
    document.getElementById("ansbox").appendChild(pElement);
  }
}
