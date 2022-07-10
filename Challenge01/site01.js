const marvelHeroes = [
    "Ant-Man",
    "Black Panther",
    "Black Widow",
    "Captain America",
    "Doctor Strange",
    "Hawkeye",
    "Hulk",
    "Iron Man",
    "Luke Cage",
    "Moon Knight",
    "Ms. Marvel",
    "Scarlet Witch",
    "Spider-Man",
    "Thor",
    "Wasp"
]
//driver function used for display and passing values.
function findHero() {

    //implement the function findLongestString that returns the longest word.
    let lword = findLongestString(marvelHeroes);

    //used for display. no need to change
    document.getElementById("results").innerHTML = lword;

    //extra credit display all of the heroes to the page
    document.getElementById("namelist").innerHTML = marvelHeroes.join(" | ");
}

//takes an array of strings and returns the longest one. 
function findLongestString(namesArry) {
    //initiate string
    lName = "";
    //loop over names
    for (let i = 0; i < namesArry.length; i++) {
        lName = namesArry[i];
        
    }

    return lName;

}