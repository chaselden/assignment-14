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


// TASK 3 -- Move Item From List to List
var wholeList = document.querySelectorAll('.standing-list li');
var goodListEl = document.querySelector('.good-standing-list')
var probListEl = document.querySelector('.probation-list')

  var listSwap = function(evt){

     var parentList = evt.target.parentNode.className
     if(parentList === "good-standing-list standing-list"){
        probListEl.appendChild(evt.target)
     }else{goodListEl.appendChild(evt.target)}


  }
  for(var i = 0; i < wholeList.length; i = i + 1){
     wholeList[i].addEventListener('click', listSwap)
  }

// TASK 4 -- Add Guest to List


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
