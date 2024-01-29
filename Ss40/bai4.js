let formElement = document.querySelector("#form");
let inputElement = document.querySelector("#inputValue");
let list = [
    {
        id: 1,
        name: "A",
    },
    {
        id: 2,
        name: "B",
    },
    {
        id: 3,
        name: "C",
    }
];
for(let index in list){
    localStorage.setItem(JSON.stringify(list[index].id), JSON.stringify(list[index].name));
}

let ulElement = document.querySelector("#list");

for(let i=0; i<list.length;i++){
    let liElement = document.createElement("li");
    liElement.innerHTML = JSON.parse(localStorage.getItem(`${i+1}`));
    ulElement.appendChild(liElement);
}
