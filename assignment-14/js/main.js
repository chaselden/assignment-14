s// GO!

    // TASK 1 -- Show/Hide Nav
 var navButtEl = document.querySelector('#hide-nav button')
 var infoBar = document.querySelector('.nav-menu')

navButtEl.addEventListener('click', function hideBar(){

    if (infoBar.classList.contains('nav-menu')){
        infoBar.classList.add('nav-menu-hidden')
        infoBar.classList.remove('nav-menu')
      } else {
        infoBar.classList.remove('nav-menu-hidden')
        infoBar.classList.add('nav-menu')
      }
  })




// TASK 2 -- Select an Icon
var thisOneEl = document.querySelector(".wish-list")

var selectorEl = function(evt) {
  // console.log(evt.target.className);

   if (evt.target.className === "option selected"){
       evt.target.className = "option"
   } else if(evt.target.className === "option"){
       evt.target.className = "option selected"
   }
 }
thisOneEl.addEventListener('click',selectorEl)



//
// TASK 3 -- Move Item From List to List
var goodListEl = document.querySelector('.good-standing-list')
var probListEl = document.querySelector('.probation-list')

function moveToProbList(evnt) {
    var onProBation = document.querySelector('.probation-section ul')

        onProBation.appendChild(evnt.target)
}

function moveTogood(evnt) {
    var goodList = document.querySelector('.good-standing-section ul')

    goodList.appendChild(evnt.target)
}


goodListEl.addEventListener("click", moveToProbList)
probListEl.addEventListener("click", moveTogood)





// TASK 4 -- Add Guest to List

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
