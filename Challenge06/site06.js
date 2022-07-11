//driver function used for display and passing values.
function findVowels() {

    //getting values from the page no need to change.
    let str = document.getElementById("wordOne").value;

    if (str == "") {
        alert("Please enter a word or phrase");
        return;
    }

    //implement getVowelCount
    let vowelObj = getVowelCount(str);
    
    //used for display no need to change
    //check if the obj returned is empty
    if (Object.keys(vowelObj).length === 0){
        alert("Error: Vowel Object is Empty");
        return;
    }
    //original
    //document.getElementById("results").innerHTML = `You entered <strong>"${str}"</strong> it has ${vowelObj} vowels`;
    //ex credit
    document.getElementById("results").innerHTML = `You entered <strong>"${str}"</strong> it has ${vowelObj.vCount} vowels.<br>The vowels found are ${vowelObj.vFound.toString()}`;

}

//takes an string and returns the vowel count and the vowels found as an object.
function getVowelCount(str) {
    //initialize variable
    let vowelCount = 0;
    let vArray = ['a','e','i','o','u'];
    //ex credit
    let foundVowels = [];
    //convert string to lowercase
    str = str.toLowerCase();
    //loop over each char
    for (let i = 0; i < str.length; i++) {
        //check to see if char exists in array 
        if (vArray.includes(str[i])){
            //increment the vowel count
            vowelCount ++;
            //ex credit
            foundVowels.push(str[i]);
        }        
    }
    //ex credit
    let vowelObj = {
        vCount : vowelCount,
        vFound : foundVowels
    }
    //ex credit
    return vowelObj;
    //return the vowel count
    //return vowelCount;

}