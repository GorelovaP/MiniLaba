let area = document.getElementById("area")
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let options = document.getElementsByTagName("option");

function focus2(){
    input1.placeholder="ФИО";
    input2.placeholder = "Возраст";
}
function focus3(){
    input3.placeholder = "Есть ли домашние животные?";
}
function focus4(){
    input4.placeholder = "Взяли бы вы кота из приюта?";
}


btn1.addEventListener("click", function (){
    input1.value="";
    input1.disabled=true;
    input2.value="";
    input2.disabled=true;
    input3.value="";
    input3.disabled=true;
    input4.value="";
    input4.disabled=true;
})

btn2.addEventListener("click", function (){
    if(input1.value === "" || input2.value === "" || input3.value === "" || input2.value === "" ){
        alert("Заполните все поля");
        return
    }

let selectedOption;
    for (let option of options) {
        if (option.selected){
            selectedOption= option.value;
        }
    }
    if (selectedOption === "red") area.style.color="red";
    if (selectedOption === "orange")  area.style.color="orange";
    if (selectedOption === "yellow")  area.style.color="yellow";
    area.value = input1.value + " "+ input2.value +" "+ input3.value+" " +input4.value;
})

btn3.addEventListener("click",function (){
let newInput = document.createElement("input");
newInput.labels= "Новый инпут"
newInput.value = input4.value +" "+ new Date();
input1.parentNode.insertBefore(newInput,input2);
return  btn3.disabled=true;
})
