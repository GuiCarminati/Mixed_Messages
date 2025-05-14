
function processButtonClick(event){
    const counter = document.getElementById("stepCounter");
    if(counter.value == 0){
        const rndIndex = Math.floor(Math.random()*jokesArray.length-1)
        const message = {joke: jokesArray[rndIndex][0], punchline: jokesArray[rndIndex][1]}
        changeElementMessage("joke",message.joke);
        changeElementMessage("punchline",message.punchline);

        showElement("joke");
        changeElementMessage("joke_button", "Punchline!");
        counter.value++;
    } else if(counter.value == 1){
        showElement("punchline");
        changeElementMessage("joke_button", "Reset");
        counter.value++;
    } else {
        hideElement("joke");
        hideElement("punchline");
        changeElementMessage("joke_button","Give me another Joke!")
        counter.value=0;
    }
}

function changeElementMessage(elementID, message){
    const element = document.getElementById(elementID);
    element.innerHTML = message;
}

function showElement(elementID){
    const element = document.getElementById(elementID);
    element.style.display = "block";
}

function hideElement(elementID){
    const element = document.getElementById(elementID);
    element.style.display = "none";
}


document.getElementById("joke_button").addEventListener("click",processButtonClick);
