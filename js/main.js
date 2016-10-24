// GO!

    // TASK 1 -- Show/Hide Nav
  var navButt = document.querySelector('button')
var infoBar = document.querySelector('.nav-menu')

function hideBar() {

    if (infoBar.className === 'nav-menu'){
        infoBar.className = 'nav-menu nav-menu-hidden'
      }else{
        infoBar.className = 'nav-menu'
      }

  }
navButt.addEventListener('click', hideBar)




// TASK 2 -- Select an Icon
var thisOne = document.querySelector(".wish-list")

function selector(evt) {
var noClass = evt.target.classList

   if (noClass.contains('selected') === true){
       noClass.remove('selected')
  }else{
     (noClass.contains('selected') === true);
        noClass.add('selected')
        console.log(noClass)
   }
 }
thisOne.addEventListener('click', selector)


//
TASK 3 -- Move Item From List to List

// TASK 4 -- Add Guest to List

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
