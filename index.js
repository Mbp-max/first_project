// const baseUrl = 'http://localhost:3000'
// let goal_gifs = [];
// let randomgif;

// const applause = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-animated-small-group-applause-523.mp3")
// const dislike = new Audio("https://audio-previews.elements.envatousercontent.com/files/301442255/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22Q22ZG9E-human-crowd-boo-short-02.mp3%22")
// const laugh = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-old-cartoon-says-thank-you-383.mp3")
// const submit = new Audio ("https://assets.mixkit.co/sfx/preview/mixkit-woosh-wind-1168.mp3")

// const gif = document.querySelector('#goalgif')
// const captions = document.querySelector('#caption')
// const likeButton = document.querySelector("#like-button");
// const laughButton = document.querySelector('#laugh-button')
// const dislikeButton = document.querySelector('#dislike-button')
// const gifContainer = document.querySelector("#gif-container")

// fetch(`http://localhost:3000/gifs/`)
//     .then(resp => resp.json())
//     .then(data => {
//         goal_gifs = data;
//         randomgif = randomGoal(goal_gifs);
//         displayGoal(randomgif);
//         console.log(goal_gifs)
//     })
    
// function displayGoal(goal) {
//     console.log(goal)
//     gif.src = goal.gif
//     gif.alt = goal.id
//     captions.textContent = `"${goal.caption}"`
//     goal.watched = true
//     randomgif = goal
// }



// likeButton.addEventListener("click", () => {console.log("click"), appendGif(randomgif), newRandomGif(), applause.play()})
// laughButton.addEventListener('click', () => newRandomGif())
// dislikeButton.addEventListener('click', () => { newRandomGif(), dislike.play() })

// function randomGoal(array) {
//     let index = Math.floor(Math.random() * array.length)
//     let gifSelected = array[index]
//     if (gifSelected == undefined){
//         console.log("bug found", index)
//         console.log(array.length)
//         debugger
//     }   
//     return gifSelected
// }

// function newRandomGif() {
//     let notWatchedGoals = goal_gifs.filter(goal => goal.watched == false)
//     console.log(notWatchedGoals)
//     let gifSelected = randomGoal(notWatchedGoals)
//     displayGoal(gifSelected)
// }

// function alertFunction() {
//     alert('Thank you for your feedback')
// }

// function appendGif(gif) {
//     const gifList = document.createElement("div")
//     gifList.className = "container2"
//     const gifImg = document.createElement("img")
//     gifImg.src = gif.gif
//     gifImg.className = 'image'
//     gifImg.addEventListener('click', ()=>displayGoal(gif))
//     gifList.append(gifImg)
//     gifContainer.append(gifList)
// }

// /////COMMENTS///////
// const usernameInput = document.querySelector('#username')
// const commentInput = document.querySelector('#comment-box')
// const commentSection = document.querySelector("#comment-section")
// const commentForm = document.querySelector('#comment-form')

// commentForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     commentSectionInput();
//     submit.play()
// })

// function commentSectionInput() {
//     const newCommentContainer = document.createElement('div')
//     newCommentContainer.className = "newComment"
//     newCommentContainer.textContent = `${usernameInput.value} : 
//     ${commentInput.value}`
//     commentSection.append(newCommentContainer)
// }


var customerName = "bob"

function toUpperCase() {
   console.log(customerName.toUpperCase())
}