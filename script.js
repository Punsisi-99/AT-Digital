//menubar icon
window.addEventListener("load", () => {
	const closeBtn = document.querySelector(".nav-bar .close-icon");
	const menuBtn = document.querySelector(".nav-bar .menu");
	const navMenu = document.querySelector(".nav-bar .navigation");

	function toggleNavmenu() {
		navMenu.classList.toggle("hidden");
	}

	closeBtn.addEventListener("click", toggleNavmenu);
	menuBtn.addEventListener("click", toggleNavmenu);
});