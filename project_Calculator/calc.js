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

for (var i = 0, l = nums.length; i < l; i++) {
    var valueNums;
    nums[i].addEventListener('click', function(){
        if (answerNum) {
            answerNum = "";
            valueNums = this.getAttribute("value");
            currentNum = answerNum + valueNums;
            response.setAttribute("value", currentNum);
        } else {
            valueNums = this.getAttribute("value");
            currentNum = currentNum + valueNums;
            response.setAttribute("value", currentNum);
        }
    })
        
} 

 
for (var i = 0; i < mathOps.length; i++) {
    mathOps[i].addEventListener('click', function() {
        oldNum = currentNum;
        currentNum = "";
        operatorForCalcul = this.getAttribute("id");
        response.setAttribute("value", oldNum);
    })    
}    

var buttonEgal = document.getElementById("button-equal");
buttonEgal.addEventListener("click", function(){
    console.log(currentNum);
    if (currentNum) {
        calculator(operatorForCalcul);
    } else {
        currentNum = oldNum;
        calculator(operatorForCalcul);
    }
    response.setAttribute("value", currentNum);
    answerNum = response.getAttribute("value");
    console.log(answerNum);
    // answerNum = response.getAttribute("value");
})

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

