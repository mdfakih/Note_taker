let taskArray = []
let inputEl = document.getElementById("input-el")
let chuckNorrisBtn = document.getElementById("chuck-norris")
let jokeDiv = document.getElementById("joke")
let submitBtn = document.getElementById("submit-btn")
let ulEl = document.querySelector("ul")


//All functions related to Chuck Norris Jokes
function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => displayJoke(data.value))
}

function displayJoke(joke){
     jokeDiv.innerHTML = `<p id="joke-el">${joke}</p>
                        <button id="joke-btn" onclick = "closeBtn()">CLOSE</button>
                        `
}

function closeBtn(){
    jokeDiv.innerHTML= null
}

//All functions related to tasks
function inputLength(){
    return inputEl.value.length
}

function createTask(){
    taskArray.push(inputEl.value)
    let taskList = ""
    for( let i = 0; i < taskArray.length; i++){
        taskList += ` <li name = "delList">${taskArray[i]}
                            <button id = "del-btn" onclick="xBtn(${i})">X</button>
                        </li> `
    }    
    ulEl.innerHTML = taskList   
    inputEl.value = "" 
}

function createTaskOnClick(){
    if(inputLength() > 0){
        createTask()
    }  
}

function createTaskOnKeyPress(event){
    if(inputLength() > 0 && event.which === 13){
        createTask()
    }
}

function xBtn(i){
    let delBtn = document.getElementsByName("delList")
    delBtn[i].remove()
    taskArray.splice(i, 1)
    console.log(taskArray)
}

chuckNorrisBtn.addEventListener("click", getJoke)

ulEl.addEventListener("click", xBtn)

submitBtn.addEventListener("click", createTaskOnClick)

inputEl.addEventListener("keypress", createTaskOnKeyPress)

