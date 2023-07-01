let icon = document.querySelector(".icn");
let nav = document.querySelector(".nav");
let header = document.querySelector(".header");
window.addEventListener('scroll',()=>{
	header.classList.toggle("sticky",window.scrollY > 5);
});
icon.onclick = () => {
	icon.classList.toggle("X");
	nav.classList.toggle("act");
}