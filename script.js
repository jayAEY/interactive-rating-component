const submit = document.querySelector('#submit');
const ratingForm = document.querySelector('form');
const ratingState = document.querySelector('#rating-state')
const thankYouState = document.querySelector('#thank-you-state')
const ratingText = document.querySelector('#rating-text')
const radioButtons = document.querySelectorAll('input[type="radio"]')
const stars = document.querySelectorAll(".fa-star")
let rating
let averageRating = 5

radioButtons.forEach(btn => {
  btn.checked = false
});

function updateRating(e) {
  rating = e.target.value;
}

function handleSubmit(e) { 
  e.preventDefault()
  if (rating != undefined) {
    ratingState.style.display = "none"
    thankYouState.style.display = "flex"
    ratingText.innerHTML = `You selected ${rating} out of 5`
  }
}

function handleAverage() {
    console.log([...stars][2])
    // stars.map((e) => console.log(e))
//  console.log(stars[1].classList.add("fa-solid", "fa-beat"))
}


handleAverage()

ratingForm.addEventListener("submit", handleSubmit)
// ratingForm.addEventListener("submit", handleAverage)
ratingForm.addEventListener("input", updateRating)