const submit = document.querySelector('#submit');
const ratingForm = document.querySelector('form');
const ratingState = document.querySelector('#rating-state')
const leftArrow = document.querySelector('#left-arrow')
const thankYouState = document.querySelector('#thank-you-state')
const ratingText = document.querySelector('#rating-text')
const radioButtons = document.querySelectorAll('input[type="radio"]')
const stars = document.querySelectorAll(".fa-star")
let rating
let averageRating

// sets counts for sum of ratings and total rating count to calculate average later
let sumOfRatings = parseInt(window.localStorage.getItem("sumOfRatings")) || 0
let totalRatings = parseInt(window.localStorage.getItem("totalRatings")) || 0

radioButtons.forEach(btn => {
  btn.checked = false
});

function updateRating(e) {
  rating = parseInt(e.target.value);
}

// dynamically changes average rating display
function handleAverage(newRating) {
    [...stars].map((e,i) =>{
        //makes all stars outlines
        e.classList.remove("fa-solid", "fa-beat")
        //changes outlines to fills depending on average
        i < averageRating ? e.classList.add("fa-solid", "fa-beat") : null
    })
}

function handleSubmit(e) { 
  e.preventDefault()
  if (rating != undefined) {
    // updates sum of ratings in local storage
    window.localStorage.setItem("sumOfRatings", (sumOfRatings + rating))
    sumOfRatings = sumOfRatings + rating
    
    // updates total ratings in local storage
    window.localStorage.setItem("totalRatings", totalRatings + 1)
    totalRatings += 1

    // updates average rating variable and display
    averageRating = Math.floor(sumOfRatings / totalRatings)
    handleAverage(rating)

    // changes display from rating panel to thank you panel
    ratingState.style.display = "none"
    thankYouState.style.display = "flex"
    ratingText.innerHTML = `You selected ${rating} out of 5`
  }
}

// handles back button
function back() {
    ratingState.style.display = "contents"
    thankYouState.style.display = "none"
}

ratingForm.addEventListener("submit", handleSubmit)
ratingForm.addEventListener("input", updateRating)
leftArrow.addEventListener("click", back )
