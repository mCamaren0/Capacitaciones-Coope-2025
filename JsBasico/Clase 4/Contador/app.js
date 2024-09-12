let counter_elem = document.querySelector('.number');

const increseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreseBtn = document.getElementById("decrease");

let cont = 0;

increseBtn.addEventListener('click', function(){
    counter_elem.textContent = parseInt(counter_elem.textContent)+1;
    console.log(counter_elem.textContent);
    changeColor(counter_elem.textContent);
});

resetBtn.addEventListener('click', function(){
    counter_elem.textContent = "0";
    console.log(cont);
    changeColor(counter_elem.textContent);
});


decreseBtn.addEventListener('click', function(){
    counter_elem.textContent = parseInt(counter_elem.textContent)-1;
    console.log(cont);
    changeColor(counter_elem.textContent);
});

function changeColor(number){
    let cont = parseInt(number);
    let selectedColor = "";

    if(cont > 0){
        selectedColor = 'green';
    }
    else if(cont == 0){
        selectedColor = 'black';
    }
    else {
        selectedColor = 'red';
    }

    counter_elem.style.color = selectedColor;

}