const baseUrl = 'http://localhost:3000'
let goal_gifs = [];
let randomgif;
fetch(`http://localhost:3000/gifs/`)
.then(resp => resp.json())
.then(data => {
    goal_gifs = data;
    randomgif = randomGoal(goal_gifs);
    displayGoal(randomgif);
    console.log(goal_gifs)
    buttons()
})
const gif = document.querySelector('#goalgif')
const captions = document.querySelector('#caption')
function displayGoal(goal){
    // console.log(goal.watched)
    if (goal.watched == false){
        gif.src = goal.gif 
        gif.alt = goal.id
        captions.textContent = goal.caption
        goal.watched = true 
        console.log(goal.watched)}
    else if ( goal.watched == true ){
        randomGoal(goal_gifs)
    }
    likeButton.addEventListener("click", () => { appendGif(goal), buttonFunctionality()})
}
const likeButton = document.querySelector("#like-button");
const laughButton = document.querySelector('#laugh-button')
const dislikeButton = document.querySelector('#dislike-button')

function randomGoal(array){
    let gifSelected = array[Math.floor(Math.random() * array.length) + 1]
    return gifSelected
}

function buttons(){
    laughButton.addEventListener('click', () => buttonFunctionality()),
    dislikeButton.addEventListener('click', () => buttonFunctionality())
}

function buttonFunctionality(){
    let gifSelected = randomGoal(goal_gifs)
    displayGoal(gifSelected)
    console.log("im being clicked")}

function alertFunction(){
    alert('Thank you for your feedback')
}
function appendGif(gif){
    const gifContainer = document.querySelector("#gif-container")
    const gifList = document.createElement("div")
    const gifImg = document.createElement("img")
    gifImg.src = gif.gif
    gifList.append(gifImg)
    gifContainer.append(gifList)
}

/////COMMENTS///////
const usernameInput = document.querySelector('#username')
const commentInput = document.querySelector('#comment-box')
const commentSection = document.querySelector("#comment-section")
const commentForm = document.querySelector('#comment-form')

commentForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    commentSectionInput();
})

function commentSectionInput(){
    const newCommentContainer = document.createElement('div')
    const newUsernameContainer = document.createElement('div')
    newCommentContainer.textContent = commentInput.value
    newUsernameContainer.textContent = `${usernameInput.value} : `
    commentSection.append(newUsernameContainer, newCommentContainer)
}