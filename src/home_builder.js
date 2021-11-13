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

	// section div#description p
	let p = document.createElement("p");
	div.appendChild(p);
	p.innerHTML = "History";
	div.appendChild(document.createElement("br"));

	// section div#description span
	let span = document.createElement("span");
	div.appendChild(span);
	span.id = "history";
	span.innerText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat. aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum.";
	div.appendChild(document.createElement("br"));
	div.appendChild(document.createElement("br"));
	div.appendChild(document.createElement("br"));

	// section div#description p
	p = document.createElement("p");
	div.appendChild(p);
	p.innerHTML = "Hours";
	div.appendChild(document.createElement("br"));

	// section div#description div#hours
	let div_hours = document.createElement("div");
	div.appendChild(div_hours);
	div_hours.innerHTML =
		"Sunday: 8am - 8pm <br />Monday: 6am - 6pm <br />Tuesday: 6am - 6pm <br />Wednesday: 6am - 6pm<br />Thursday: 6am - 10pm<br />Friday: 6am - 10pm<br />Saturday: 8am - 10pm";
	div.appendChild(document.createElement("br"));
	div.appendChild(document.createElement("br"));
	div.appendChild(document.createElement("br"));

	// section div#description p location
	p = document.createElement("p");
	div.appendChild(p);
	p.innerHTML = "Location";
	div.appendChild(document.createElement("br"));

	// section div#description span
	span = document.createElement("span");
	div.appendChild(span);
	span.innerText = "St.Patrick's steet 123, Forestville, Maine,Germany";

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
