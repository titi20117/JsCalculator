//input solution
var response = document.querySelector("input");

var nums = document.querySelectorAll(".operation-number");
var numberReset = document.querySelectorAll(".operation-cancel")[0];
var mathOps = document.querySelectorAll(".operation-ops");
//variables
var  currentNum = "";
var oldNum = "";
var  answerNum;
var operatorForCalcul;

// function setCurrentNumber(params){
    for (var i = 0, l = nums.length; i < l; i++) {
        var valueNums;
        nums[i].addEventListener('click', function(){
            if (answerNum) {
                valueNums = this.getAttribute("value");
                answerNum = "";    
            } else {
                valueNums = this.getAttribute("value");
                currentNum = currentNum + valueNums;
                console.log(currentNum);
                response.setAttribute("value", currentNum);
                // answerNum = response.getAttribute("value");
                // console.log(answerNum);

            }
        })
        
    }  
// }

 
//method with operation
// function mathoperation(params){
    // setCurrentNumber(nums);
    // console.log(answerNum);
    for (var i = 0; i < mathOps.length; i++) {
        mathOps[i].addEventListener('click', function() {
            console.log('ans: ' + currentNum);

            console.log(operatorForCalcul);
            oldNum = currentNum;
            currentNum = "";
            operatorForCalcul = this.getAttribute("id");
            response.setAttribute("value", "");
            console.log("oldNum = " + oldNum);
            console.log("....................");
            console.log("currentNum = " + currentNum);
        })
        
    }
    
// function solutionEgal() {
    var buttonEgal = document.getElementById("button-equal");
    buttonEgal.addEventListener("click", function(){
        console.log(currentNum);
        calculator(operatorForCalcul);
        response.setAttribute("value", currentNum);
        console.log(answerNum);
    })
    // return answerNum;
// }

function calculator(params1) {
    oldNum = parseFloat(oldNum);
    currentNum = parseFloat(currentNum);
    switch (params1) {
        case "button-add":
            currentNum = oldNum + currentNum;
            break;
        case "button-sub":
            currentNum = oldNum - currentNum;
            break;
        case "button-mul":
            currentNum = oldNum * currentNum;
            break;
        case "button-div":
            if (currentNum != 0) {
                currentNum = oldNum / currentNum;
            } else {
                currentNum = "ERROR";
            }
            break;
        default:
            break;
    }
}

numberReset.addEventListener("click", function() {
    var afterClick = numberReset.getAttribute("value");
    if (currentNum) {
        currentNum = "";
        response.setAttribute("value", afterClick);
    } else {
    response.setAttribute("value", afterClick);
    }
});


var response = document.querySelector("input");