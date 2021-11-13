import "./style.css";
import import_logo from "./graphic/logo.png";
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

	// section div#description
	div = document.createElement("div");
	section.appendChild(div);
	div.id = "description";
	let p;

	function createPerson(name, position, number, mail) {
		let p = document.createElement("p");
		div.appendChild(p);
		p.innerHTML = name;
		div.appendChild(document.createElement("br"));
		div.innerHTML += `${position}<br>${number}<br>${mail}<br><br>`;
	}

	createPerson(
		"Mr Wojciech",
		"Chef ",
		"555-555-5554",
		"totallyRealEmail@notFake.com"
	);
	createPerson(
		"Mrs Malgorzata",
		"Manager",
		"555-555-5555",
		"perfectlyRealEmail@notFake.com"
	);
	createPerson(
		"Mr Grzybiarz",
		"Waiter",
		"555-555-5556",
		"totallyRealEmail@notFake.com"
	);

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
