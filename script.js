const submit = document.querySelector('#submit');
const ratingForm = document.querySelector('form');
const ratingState = document.querySelector('#rating-state')
const leftArrow = document.querySelector('#left-arrow')
const thankYouState = document.querySelector('#thank-you-state')
const ratingText = document.querySelector('#rating-text')
const radioButtons = document.querySelectorAll('input[type="radio"]')
const stars = document.querySelectorAll(".fa-star")
let rating
// let averageRating = 4
let sumOfRatings 
let totalRatings 
let averageRating 

// console.log(sumOfRatings, totalRatings, totalRatings)


radioButtons.forEach(btn => {
  btn.checked = false
});

function updateRating(e) {
  rating = parseInt(e.target.value);
}

function handleAverage(newRating) {
    [...stars].map((e,i) =>{
        e.classList.remove("fa-solid", "fa-beat")
        i < averageRating ? e.classList.add("fa-solid", "fa-beat") : null
    })
}

function handleSubmit(e) { 
  e.preventDefault()
  if (rating != undefined) {
    // window.localStorage.setItem("Average Rating", Math.floor((averageRating + rating)/2))
    // averageRating = Math.floor((averageRating + rating)/2)

    // let averageRating = sumOfRatings / totalRatings

    // let sumOfRatings = parseInt(window.localStorage.getItem("sum of ratings"))
    // let totalRatings = parseInt(window.localStorage.getItem("total ratings"))
    // window.localStorage.setItem("sum of ratings", sumOfRatings + rating)
    // window.localStorage.setItem("total ratings", totalRatings++)
    window.localStorage.setItem("sum of ratings", sumOfRatings)
    
    averageRating = Math.floor((averageRating + rating))

    // averageRating = Math.floor((averageRating + rating)/2)

    handleAverage(rating)
    ratingState.style.display = "none"
    thankYouState.style.display = "flex"
    ratingText.innerHTML = `You selected ${rating} out of 5`

    // console.log(window.localStorage.getItem("sum of ratings"))
    // console.log(window.localStorage.getItem("total ratings"))
    console.log(sumOfRatings, totalRatings, totalRatings)
    
  }
}

function back() {
    ratingState.style.display = "contents"
    thankYouState.style.display = "none"
}

ratingForm.addEventListener("submit", handleSubmit)
ratingForm.addEventListener("input", updateRating)
leftArrow.addEventListener("click", back )
