var avgSalary = 0;
var budgMin = 0;
var budgMax = 0;
var prevSalary = 0;
var recBenefits = [];
var candBenefits = [];

var decLimit = 0; //number of decimals
var numBenefits = 9; //number of benefits
var recView = true; //start with recruiter

var startButton;
var flipButton;
var resetButton;
var avgInput;
var radioRec;
var title;
var posAvg;
var varNum;
var table;
var transitionText;
var introContainer;
var dataContainer;

window.onload = function(){
    
    guiSetup();
    
};

function guiSetup(){
    
    startButton = document.getElementById("start");
    startButton.onclick = function(){startClick()};
    
    flipButton = document.getElementById("flip");
    flipButton.onclick = function(){flipClick()};
    
    resetButton = document.getElementById("reset");
    resetButton.onclick = function(){resetClick()};
    
    avgInput = document.getElementById("avgInput");
    radioRec = document.getElementById("startRec");
    
    title = document.getElementById("title");
    posAvg = document.getElementById("posAvg");
    varNum = document.getElementById("varNum");
    table = document.getElementById("benefits");
    transitionText = document.getElementById("transitionText");
    introContainer = document.getElementById("intro-container");
    dataContainer = document.getElementById("data-container");
}

function numberSetup(){
    avgSalary = getAvgSalary()
    budgMin = getBudgMin();
    budgMax = getBudgMax();
    prevSalary = getPrevSalary();
    recBenefits = getRecBenefits();
    candBenefits = getCandBenefits();
    
    recOrCand();
}

function recOrCand(){
    if(recView){
        setupRecruiter();
    }
    else{
        setupCandidate();
    }
}

function startClick(){
    
    startButton.disabled = true;
    
    introContainer.style.visibility = "hidden";
    
    recView = radioRec.checked;
    
    numberSetup();
    
}

function flipClick(){
    transitionHide();
    transitionText.onclick = function(){
    debugger;
        if(recView){
            setupCandidate();
            transitionShow();
        }
        else{
            setupRecruiter();
            transitionShow();
        }
    }
}

function resetClick(){
    dataContainer.style.visibility = "hidden";
    introContainer.style.visibility = "visible";
    startButton.disabled = false;
}

function transitionHide(recView){
    dataContainer.style.visibility = "hidden";
    transitionText.style.visibility = "visible";
    
}

function transitionShow(recView){
    dataContainer.style.visibility = "visible";
    transitionText.style.visibility = "hidden";
}

function getAvgSalary(){
    input = avgInput.value;
    avgInput.value = "100,000";
    
    return isNumber(input) ? removeCommas(input) : 100000;
}

function getBudgMin(){
    var tempBudgMin = avgSalary - 10000;
    return tempBudgMin > 0 ? tempBudgMin.toFixed(decLimit) : 0;
}

function getBudgMax(){
    return (avgSalary+10000+Math.random()*40000).toFixed(decLimit);
}

function getPrevSalary(){
    
    var difference = Math.random()*10000;
    var prevSalary = avgSalary;
    
    if(Math.random()<.5){ //add or subtract
        prevSalary = prevSalary - difference;
    }
    else{
        prevSalary = prevSalary + difference;
    }
    
    return prevSalary.toFixed(decLimit);
}

function getRecBenefits(){
    for(var x = 0; x < numBenefits; x++){
        recBenefits[x] = recBenefitStatus();
    }
    
    return sortArray(recBenefits);
}

function getCandBenefits(){
    for(var x = 0; x < numBenefits; x++){
        candBenefits[x] = candBenefitStatus();
    }
        
    
    return sortArray(candBenefits);
    }

function setRecBenefits(){
    for(var x = 0; x < recBenefits.length; x++){
        document.getElementById("ben"+(x+1)).innerHTML = translateBenefit(recBenefits[x]);
    }
    
    return recBenefits;
}

function setCandBenefits(){
    for(var x = 0; x < candBenefits.length; x++){
        document.getElementById("ben"+(x+1)).innerHTML = translateBenefit(candBenefits[x]);
    }
    
    return candBenefits;
}

function setupRecruiter(){
    recView = true;
    
    transitionText.innerHTML = "Press here if Recruiter has left";
    
    title.innerHTML = "Recruiter";
    posAvg.innerHTML = "Position Average: " + addCommas(avgSalary);
    varNum.innerHTML = "Budget Range: " + addCommas(budgMin) + " - " + addCommas(budgMax);
    flipButton.innerHTML = "Flip to Candidate";
    
    setRecBenefits();
    dataContainer.style.visibility = "visible";
}

function setupCandidate(){
    recView = false;
    
    transitionText.innerHTML = "Press here if Candidate has left";
    
    title.innerHTML = "Candidate";
    posAvg.innerHTML = "Position Average: " + addCommas(avgSalary);
    varNum.innerHTML = "Previous Salary: " + addCommas(prevSalary);
    flipButton.innerHTML = "Flip to Recruiter";
    
    setCandBenefits();
    dataContainer.style.visibility = "visible";
}

function recBenefitStatus(){
    var ran = Math.random();
    var status = "";
    
    if(ran < .2){
        status = 3;
    }
    else if (ran < .6){
        status = 2;
    }
    else{
        status = 1;
    }
    
    return status;
}

function candBenefitStatus(){
    var ran = Math.random();
    var status = "";
    
    if(ran < .5){
        status = 5;
    }
    else{
        status = 4;
    }
    
    return status;
}

function translateBenefit(x){
    if(x === 1){
        return "Included";   
    }
    else if(x === 2){
        return "Not included";
    }
    else if(x === 3){
        return "Impossible";
    }
    else if(x===4){
        return "Had previously";
    }
    else if(x===5){
        return "Did not have";
    }
}

function sortArray(x){
    return x.sort(compareNumbers());
}

function compareNumbers(a, b){
    return a-b;
}

function isNumber(x){
    return !isNaN(x.toString().replace(/[,]/g,''));
}

function removeCommas(toRemove){
    return parseInt(toRemove.toString().replace(/,/g, ''));
}

function addCommas(toAdd){
    return parseFloat(toAdd).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //To Elias Zamaria on StackOverflow: This is beautiful. Thank you.
}