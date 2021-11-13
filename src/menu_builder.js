import "./style.css";
import import_logo from "./graphic/logo.png";
import pizza1 from "./graphic/pizza1.png";
import pizza2 from "./graphic/pizza2.png";
import pizza3 from "./graphic/pizza3.png";
import pizza4 from "./graphic/pizza4.png";
import pizza5 from "./graphic/pizza5.png";
import buildHome from "./home_builder.js";
import buidlContact from "./contact_builder";
import buildMenu from "./menu_builder";

function build() {
	const content_div = document.getElementById("content");
	content_div.innerHTML = "";

	// header
	const header = document.createElement("header");
	const logo = new Image();
	logo.src = import_logo;

	header.appendChild(logo);
	content_div.appendChild(header);

	// nav
	const nav = document.createElement("nav");
	content_div.appendChild(nav);

	let div = document.createElement("div");
	div.classList.add("btn");
	div.addEventListener("click", buildHome);
	div.innerText = "Home";
	nav.appendChild(div);

	div = document.createElement("div");
	div.classList.add("btn");
	div.addEventListener("click", buidlContact);
	div.innerText = "Contact";
	nav.appendChild(div);

	div = document.createElement("div");
	div.classList.add("btn");
	div.addEventListener("click", buildMenu);
	div.innerText = "Menu";
	nav.appendChild(div);

	// section
	let section = document.createElement("section");
	content_div.appendChild(section);
	let div_menu = document.createElement("div");
	div_menu.id = "menu";
	section.appendChild(div_menu);

	// section div#menu
	function createMenuElement(pizza_name) {
		let menu_element = document.createElement("div");
		menu_element.classList.add("menu-element");
		let pizza_img = new Image();
		pizza_img.src = pizza_name;
		menu_element.appendChild(pizza_img);
		let pizza_description = document.createElement("div");
		menu_element.appendChild(pizza_description);
		pizza_description.classList.add("pizza-description");
		let title = document.createElement("h4");
		title.innerText = "Ingridients:";
		pizza_description.appendChild(title);

		let ul = document.createElement("ul");
		pizza_description.appendChild(ul);

		let li = document.createElement("li");
		li.innerText = "Champignon";
		ul.appendChild(li);

		li = document.createElement("li");
		li.innerText = "Salami";
		ul.appendChild(li);

		li = document.createElement("li");
		li.innerText = "Onion";
		ul.appendChild(li);

		li = document.createElement("li");
		li.innerText = "Olive";
		ul.appendChild(li);

		div_menu.appendChild(menu_element);
	}

	createMenuElement(pizza1);
	createMenuElement(pizza2);
	createMenuElement(pizza3);
	createMenuElement(pizza4);
	createMenuElement(pizza5);
	createMenuElement(pizza1);
	createMenuElement(pizza2);
	createMenuElement(pizza3);
	createMenuElement(pizza4);
	createMenuElement(pizza5);

	// footer
	let footer = document.createElement("footer");
	content_div.appendChild(footer);
	footer.innerText = "Website mede by Antoni Pietrzak";
	let a = document.createElement("a");
	footer.appendChild(a);
	a.href = "https://www.freepik.com/vectors/background";
	a.innerHTML = "Background vector created by freepik - www.freepik.com";
}

export default build;
