let card = document.querySelectorAll(".card--pink");
let cardHeading = document.querySelectorAll(".card__heading");
let burger = document.querySelector(".burger");
let burgerList = document.querySelector(".header__nav-list");

let logo = document.querySelectorAll(".card__logo");


// card.forEach(function(){
//   logo.classList.add('а');
// }) ;

card.forEach(function(el){
  el.addEventListener('mouseover', function() {  
    el.childNodes[1].classList.add("up-img");
  })
  el.addEventListener('mouseout', function() { 
    el.childNodes[1].classList.remove("up-img");
  })

})


burger.addEventListener('click', function() {  
  burger.classList.toggle("burger--cross");
  burgerList.classList.toggle("burger-active");
  document.querySelector(".body").classList.toggle("lock");
})



  
  
  

// 
