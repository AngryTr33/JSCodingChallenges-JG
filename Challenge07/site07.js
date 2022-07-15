//driver function used for display and passing values.
function checkPalindrome() {
    
    //get values from the page. no need to change.
    let str = document.getElementById("wordOne").value;

    if (str == "") {
        alert("Please enter a word or phrase");
        return;
    }

    //implement the isPalindrome function
    let palindrome = isPalindrome(str);
    
    //used for display. no need to change.
    let msg = "";
   
    if (palindrome == true) {
        msg = "The word or phrase is a palindrome";
    }
    else{
        msg = "The word or phrase is NOT a palindrome";
    }

    document.getElementById("results").innerHTML = msg;
}

//takes an string to check if it is a palindrome.
//returns true or false. 
function isPalindrome(str) {
    //remove empty characters from string
    cleanStr = str.replace(/[^A-Z0-9]/ig, '');
    //lower case the string
    cleanStr = cleanStr.toLowerCase();
    //create an empty string
    let revStr = '';
    //decrementing for loop to reverse a string
    for (let i = cleanStr.length -1; i >= 0; i--) {
        revStr += cleanStr[i];
    }
    //check for palindrome
        if (revStr == cleanStr) {
            return true;
        }
    return false;
}