// menu toggle functionality on mobile
const toggle = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav-links')
const navItems = document.querySelectorAll('.nav-items')
const hero = document.querySelector('.hero')

toggle.addEventListener('click', toggleMenu)

let open = false

function toggleMenu() {
  if(!open) {
    hero.classList.add('show')
    toggle.classList.add('close')
    nav.classList.add('show')
    navItems.forEach((item) => {
      item.classList.add('show')
    })
    open = true
  } else {
    hero.classList.remove('show')
    hero.classList.add('close')
    toggle.classList.remove('close')
    nav.classList.remove('show')
    navItems.forEach((item) => {
      item.classList.remove('show')
    })
    open = false
  }

}


var shareModal = document.getElementById("share-modal");
var shareButton = document.getElementById("share-button");
var shareSpan = document.getElementsByClassName("share-close")[0];

shareButton.onclick = () => {shareModal.style.display = "flex";}
shareSpan.onclick = () => {shareModal.style.display = "none";}

window.onclick = (event) => {if (event.target == shareModal) {shareModal.style.display = "none";}}