const baseUrl = 'http://localhost:3000'
let goal_gifs = [];
let randomgif;
fetch(`http://localhost:3000/gifs/`)
.then(resp => resp.json())
.then(data => {
    goal_gifs = data;
    randomgif = randomGoal(data);
    popGoals(randomgif);
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
const likeButton = document.querySelector("#like-button");
likeButton.addEventListener("click", () => resfreshPage())

const dislikeButton = document.querySelector("#dislike-button");
dislikeButton.addEventListener("click", () => deleteGif())

fetch(`http://localhost:3000/captions/${Math.floor(Math.random() * 5) + 1 }`)
.then(resp => resp.json())
.then(data => popCaptions(data))

function popCaptions(captions){
        const caption = document.querySelector('#caption')
        caption.textContent = captions.caption 
        caption.alt = captions.id   
}

function resfreshPage(){
    document.location.reload()
}

function deleteGif(gifs){
    console.log(gifs)
    // fetch(`http://localhost:3000/gifs/${gifs.id}`, {
    //     method: 'DELETE',
    // })
    // .then(resp => resp.json());
    // resfreshPage();
}