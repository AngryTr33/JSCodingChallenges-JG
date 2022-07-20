//driver function
function findWords() {
    
    //implement the get most used words function   
    let words = getMostUsedWords(bookText,3);
    
    //no need to change. this is just used for display the results.
   if (words.length == 0){
       alert("Error: No Words Found.");
       return;
   }
    
    let li = "";
    
    words.forEach(obj => {
        li += `<li>"${obj.word}" is used ${obj.count} time(s)</li>`;
    });

    let msg = `<ol class="list-group list-group-numbered">${li}</ol>`;

    document.getElementById("results").innerHTML = msg;
}

//function to return the top 3 most used words
function getMostUsedWords(wordText, topN) {

    let wordCounts = [];
    //convert to lower case
    wordText = wordText.toLowerCase();
    //regex removes A-Z, 0-9, spaces, and '
    wordText = wordText.replace(/[^A-Z0-9\s']/ig, '');

    let words = wordText.split(/\s+/g);

    let stopWords = getStopWords();

    words = words.filter(words => !stopWords.includes(words));

    //not accurate
    //words = wordText.split(' ');

    for (let i = 0; i < words.length; i++) {
        let obj = wordCounts.find(w => {
            return w.word === words[i];
        });
        if(obj == undefined){
            wordCounts.push({
                'word': words[i],
                'count': 1
            });
        }else{
            obj.count++;
        }
    }
    //sort in desc order
    sortByCount(wordCounts, 'desc');

    //get the top N results
    wordCounts = wordCounts.slice(0, topN);

    return wordCounts;
}

function sortByCount(words, sortDir){
    words.sort((a,b) => {
        if (sortDir == "asc"){
            return a.count - b.count;
        }else{
            return b.count - a.count;
        }
    });
}


//a list of stop words we don't want to include in stats
function getStopWords() {
    return ["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your", "ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't", "don't", "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd", "i'll", "i'm", "i've", "isn't", "it's", "might've", "mightn't", "must've", "mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't", "that'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "wasn't", "we'd", "we'll", "we're", "weren't", "what'd", "what's", "when'd", "when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll", "who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd", "you'll", "you're", "you've"];
}