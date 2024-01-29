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

formElement.addEventListener("submit", function(event){
    event.preventDefault();
    deletes();
});

function render(){
    let ulHTMLs = list.map(function(add){
        return `
            <li>
                <span>${add.name}</span>
            </li>
            `;
    });
    // const ulHTML = ulHTMLs.join("");
    // ulElement.innerHTML = ulHTML;
}
render();

let i=1;

function deletes(){
    if(!inputElement.value){
        alert("ID không được để trống");
    }else{
        localStorage.removeItem(`${inputElement.value}`);
        inputElement.value = "";
        render();
    }
}