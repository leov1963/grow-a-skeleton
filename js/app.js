// ---set vars---

// const skeleton = {
//     age: 1,
//     level: 1,
//     thirst: 0,
//     hunger: 0,
//     darkEnergy: 10
// }

// ---make functions---

// ---event listeners---

// code to replace html elements when the play button is pressed
document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector("#button-control").innerHTML = '<div id="game-control"><div id="stats"><p> Thirst: 0 </div><button type="button" class="game-play-buttons" id="water">Water</button> <button type="button" class="game-play-buttons" id="fertalize">Fertalize</button> <button type="button" class="game-play-buttons" id="dark-energy">Imbue Dark Energy</button> </div>'
})