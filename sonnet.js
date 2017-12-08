
// 1. Paste code into index.html file - done

// 2. Take the contents of the sonnet div and place it in a variable.
let sonnet = document.getElementById("sonnet").innerHTML;
console.log(sonnet);

// 3. Find and output the starting position of the word "orphans".
let orphans = sonnet.indexOf("orphans");
console.log(orphans);

// 4. Output the number of characters in the sonnet.
let chars = sonnet.length;
console.log(chars);

// 5. Replace the first occurance of the string "winter" with "yuletide".
let replaceOnly = sonnet.replace("winter", "yuletide");
console.log(replaceOnly);

// 6. Replace all occurances of the string "the" with "a large".
let replaceAll = sonnet.replace(/the/g, "a large");
console.log(replaceAll);

// 7. Set the content of the sonnet div with the new string.
let newSonnet = sonnet.replace(/winter|December|birds/g, "iphone");
console.log(newSonnet);
