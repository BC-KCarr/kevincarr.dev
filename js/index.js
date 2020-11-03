
const toggleBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav-links')
const navItems = document.querySelectorAll('.nav-items')
const hero = document.querySelector('.hero')

toggleBtn.addEventListener('click', toggleMenu)

let open = false

function toggleMenu() {
  if(!open) {
    hero.classList.add('show')
    toggleBtn.classList.add('close')
    nav.classList.add('show')
    navItems.forEach((item) => {
      item.classList.add('show')
    })
    open = true
  } else {
    hero.classList.remove('show')
    hero.classList.add('close')
    toggleBtn.classList.remove('close')
    nav.classList.remove('show')
    navItems.forEach((item) => {
      item.classList.remove('show')
    })
    open = false
  }

}


var slide_index = 1;  
displaySlides(slide_index);  
function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  
function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  
function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("showSlide");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
  }

setInterval(function(){
  nextSlide(1)
},6500);