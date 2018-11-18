var countriesDiv;

function addCountries(countries){
    for(var i = 0; i < countries.length; i++){
        var countryElem = document.createElement("p");
        countryElem.className = "country";
        countryElem.innerHTML = countries[i];
        countriesDiv.appendChild(countryElem);
    }
}

function removeCountries(){
    while(countriesDiv.hasChildNodes()){
        countriesDiv.removeChild(countriesDiv.lastChild);
    }
}

window.onload = function(){
    var numCountriesBox = document.getElementById("numCountries")
    var settingsForm = document.getElementById("settings");
    var comName = document.getElementById("committee");
    var topicName = document.getElementById("topic");

    initCountries();
    console.log('hi');

    countriesDiv = document.getElementById("countries");
    //console.log(genCommittee())

    settingsForm.onsubmit = function(e){
        var numCountries = numCountriesBox.value;
        var result = genCommittee(numCountries);

        comName.innerHTML = result.committee;
        topicName.innerHTML = "Topic: " + result.topic;
        
        comName.style.display = "block";
        topicName.style.display = "block";
        
        removeCountries();
        
        if(numCountries < 0 || numCountries > 193){
            var countryElem = document.createElement("p");
            
            countryElem.innerHTML = "Not a valid number of countries."
            countriesDiv.appendChild(countryElem);
        }
        else{
            addCountries(result.countries);
        }

        return false;
    }
}
