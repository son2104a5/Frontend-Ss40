let formElement = document.querySelector("#form");
let inputElement = document.querySelector("#inputValue");
let list = JSON.parse(localStorage.getItem("add")) || [];
let ulElement = document.querySelector("#list");

formElement.addEventListener("submit", function(event){
    event.preventDefault();
    creates();
});

function render(){
    let ulHTMLs = list.map(function(add){
        return `
            <li>
                <span>${add.name}</span>
            </li>
            `;
    });
    const ulHTML = ulHTMLs.join("");
    ulElement.innerHTML = ulHTML;
}
render();

let i=1;

function creates(){
    if(!inputElement.value){
        alert("Tên cầu thủ không được để trống");
    }else{
        const addList = {
            id: Math.ceil(Math.random() * 100000000000),
            name: inputElement.value,
        };
        list.push(addList);
        localStorage.setItem(`${i}`, JSON.stringify(list));
        inputElement.value = "";
        i++;
        render();
    }
}