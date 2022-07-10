//balanced
const testbrackets1 = "[()]{}{[()()]()}";
//balanced
const testbrackets2 = `([{}])`;
//not balanced
const testbrackets3 = "{(})[]";
//not balanced
const testbrackets4 = "[(])";
//not balanced
const testbrackets5 = "[()";

//driver function used for display and passing values.
function checkBrackets() {

    //change testbrackets here. makes easire to change in one place.
    let testbrackets = testbrackets1;

    //implement isBalanced function. checks if the bracket string is balanced.
    let results = isBalanced(testbrackets);

    //used for display no need to change
    let msg = "";

    if (results == true) {
        msg = `Brackets are balanced ==> ${testbrackets}`;
    } else {
        msg = `Brackets are NOT balanced ==> ${testbrackets}`;
    }

    //display the message
    document.getElementById("results").innerHTML = msg;

}

//takes an array of strings and returns the longest one. 
function isBalanced(brackets) {
    //initialize an array
    let stack = [];
    //loop over the array
    for (let i = 0; i < brackets.length; i++) {
        //get character being passed in
        let item = brackets[i];
        //check array for open brackets
        if (item == '(' || item == '{' || item == '[') {
            //push to array
            stack.push(item);
            //leave if statement with item
            continue;
            //check array for closed brackets
        }else if(item == ')' || item == '}' || item == ']'){
            //bool check stack length for 0
            if (stack.length == 0){
                return false;
            }
            //pop item into array
            check = stack.pop();
            //check for balance
            switch (item) {
                case ')':
                    if (check != '('){
                    return false;
                }
                    break;
                case '}':
                    if (check != '{'){
                    return false;
                }
                    break;
                case ']':
                    if (check != '['){
                    return false;
                }
                    break;
            }
        }
    }
    //bool return true when stack length is 0
   return stack.length == 0;
}

//second method
function isBalancedToo(brackets){
    //initialize objects
    let stack = [];
    let openBrackets = ['(','{','['];
    let closeBrackets = [')','}',']'];
    const balancedBrackets = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    //loop over the array
    for (let i = 0; i < brackets.length; i++) {
        let item = brackets[i];
        if(openBrackets.includes(item)){
            stack.push(item);
            continue;
        }else if(closeBrackets.includes(item)){
            if(stack.length == 0){
                return false;
            }
            check = stack.pop();
            if(balancedBrackets[Check] != item){
                return false;
            }
        }
        
    }
    return stack.length == 0;
}