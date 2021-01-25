// ---set vars---

let skeleton = {
    age: 1,
    level: 1,
    thirst: 0,
    hunger: 0,
    darkEnergy: 10
}

// ---make functions---

// code to update the stats of skeleton when game buttons are pressed
function thirstTimer() {
    setTimeout(myTimeout1, 3000)
    setTimeout(myTimeout2, 6000)
    setTimeout(myTimeout3, 9000)
    setTimeout(myTimeout4, 12000)
    setTimeout(myTimeout5, 15000)
    setTimeout(myTimeout6, 18000)
    setTimeout(myTimeout7, 21000)
    setTimeout(myTimeout8, 24000)
    setTimeout(myTimeout9, 27000)
    setTimeout(myTimeout10, 30000)
    setTimeout(myTimeout11, 31000)
}

function myTimeout1() {
    document.querySelector("p").innerHTML = "Thirst: 1"
    skeleton.thirst = skeleton.thirst + 1
    console.log(skeleton.thirst)
}

function myTimeout2() {
    document.querySelector("p").innerHTML = "Thirst: 2"
    skeleton.thirst = skeleton.thirst + 1
    console.log(skeleton.thirst)
}

function myTimeout3() {
    document.querySelector("p").innerHTML = "Thirst: 3"
    skeleton.thirst = skeleton.thirst + 1
    console.log(skeleton.thirst)
}

function myTimeout4() {
    document.querySelector("p").innerHTML = "Thirst: 4"
    skeleton.thirst = skeleton.thirst + 1
    console.log(skeleton.thirst)
}

function myTimeout5() {
    document.querySelector("p").innerHTML = "Thirst: 5"
    skeleton.thirst = skeleton.thirst + 1
    console.log(skeleton.thirst)
}

function myTimeout6() {
    document.querySelector("p").innerHTML = "Thirst: 6"
    skeleton.thirst = skeleton.thirst + 1
    console.log(skeleton.thirst)
}

function myTimeout7() {
    document.querySelector("p").innerHTML = "Thirst: 7"
    skeleton.thirst = skeleton.thirst + 1
    console.log(skeleton.thirst)
}

function myTimeout8() {
    document.querySelector("p").innerHTML = "Thirst: 8"
    skeleton.thirst = skeleton.thirst + 1
    console.log(skeleton.thirst)
}

function myTimeout9() {
    document.querySelector("p").innerHTML = "Thirst: 9"
    skeleton.thirst = skeleton.thirst + 1
    console.log(skeleton.thirst)
}

function myTimeout10() {
    document.querySelector("p").innerHTML = "Thirst: 10"
    skeleton.thirst = skeleton.thirst + 1
    console.log(skeleton.thirst)
}

function myTimeout11() {
    document.querySelector("body").innerHTML = "<h1>Game Over!</h1>"
}

// ---event listeners---

// code to replace html elements when the play button is pressed
document.querySelector("#start-button").addEventListener("click", () => {
    thirstTimer()
})

document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector("#button-control").innerHTML = '<div id="game-control"><div id="stats"><p> Thirst: 0 </div><button type="button" class="game-play-buttons" id="water">Water</button> <button type="button" class="game-play-buttons" id="fertalize">Fertalize</button> <button type="button" class="game-play-buttons" id="dark-energy">Imbue Dark Energy</button> </div>'
})


