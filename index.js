const baseUrl = 'http://localhost:3000'
let goal_gifs = [];
let randomgif;
fetch(`http://localhost:3000/gifs/${Math.floor(Math.random() * 30) + 1 }`)
.then(resp => resp.json())
.then(data => {
    // goal_gifs = data;
    // randomgif = randomGoal(data);
    popGoals(data);
})
function renderGoals(goals){
    console.log(goals)
}

function popGoals(goal){
    // goals.forEach(goal => {
        const gif = document.querySelector('#goalgif')
        gif.src = goal.gif 
        gif.alt = goal.id   
}

function randomGoal(goals){
    let goalRender = goals[Math.floor(Math.random() * goals.length)]
    return goalRender
}
