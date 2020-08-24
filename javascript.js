const menuTrans = () => {
	const menu = document.querySelector(".menu-bar");
	const nav = document.querySelector(".navigation");
	menu.addEventListener("click", () => {
		nav.classList.toggle("menu-bar-active");
	});
};

menuTrans();
