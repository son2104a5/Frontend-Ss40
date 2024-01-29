let name = prompt("Họ tên");
localStorage.setItem("name", JSON.stringify(name));
let pushName = JSON.parse(localStorage.getItem("name"));
let ulElement = document.querySelector("#ul");
let li = `<li>Tên: ${pushName}</li>`;
ulElement.innerHTML += li;

let age = +prompt("Tuổi");
localStorage.setItem("age", JSON.stringify(age));
let pushAge = JSON.parse(localStorage.getItem("age"));
li = `<li>Tuổi: ${pushAge}</li>`;
ulElement.innerHTML += li;

let email = prompt("Email");
localStorage.setItem("email", JSON.stringify(email));
let pushEmail = JSON.parse(localStorage.getItem("email"));
li = `<li>Email: ${pushEmail}</li>`;
ulElement.innerHTML += li;