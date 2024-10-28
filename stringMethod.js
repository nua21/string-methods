// PROBLEM 1 - Write a function that compares two strings regardless of case sensitivity using toLowerCase() or toUpperCase(). Return true if the strings are the same, otherwise return false.
// SOLVE 1
let string1 = "nusrat";
let string2 = "SUCHONA";
function strings(){
    return (string1.toUpperCase() === string2.toLowerCase());
}
console.log(strings());
// PROBLEM 1 SOLVED

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 2 - Create a function that checks if a given sentence contains the word "JavaScript" using the includes() method. Return a message indicating whether the word is found.
// SOLVE 2
let bigLine = "Learning JavaScript is kinda easy but inconvenient and exasperating for me.";
function checkWord(){
    if (bigLine.includes("JavaScript")) {
        return "The word 'JavaScript' is actually contained in my big line.";
    }
    else{
        return "The word 'JavaScript' is not contained in my big line.";
    }
}
console.log(checkWord());
// PROBLEM 2 SOLVED

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 3 -  Write a function that splits a sentence into an array of words using split(). Then, use join() to convert the array back into a sentence, separating the words with hyphens (-).
// SOLVE 3
let string3 = "Nusrat hates JavaScript";
function cutAdd(){
    let cut = string3.split(" ");
    return cut.join("-");
}
console.log(cutAdd());
// PROBLEM 3 SOLVED

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 4 - Create a function that takes a string and extracts a portion using slice(). The function should take a start and an end index as arguments and return the sliced part.
// SOLVE 4
let string4 = "Mastering JavaScript, despite challenges.";
function idkWhatToDo(start, end){
    return string4.slice(start, end);
}
console.log(idkWhatToDo(10,20));
// PROBLEM 4 SOLVED

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 5 - Given an object with properties name, email, and age, use destructuring to extract the values into variables and log them to the console.
// SOLVE 5
let selfDetails = {
    myName: "Nusrat Suchona",
    email: "nusrafffe143@gmail.com",
    age: 19,
};
let {myName, email, age} = selfDetails;
console.log(myName, email, age);
// PROBLEM 5 SOLVED