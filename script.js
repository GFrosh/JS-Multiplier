let txt = document.getElementById('txt');


let button = document.querySelector("button");


let button2 = document.getElementById('button2');


let num = document.querySelector("input").value;


const array = ["Gideon", "Sarah", "Comfort", "Cherish"]


const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


function clear() {
    
    let txt = document.getElementById('txt');
    
    txt.innerHTML = null;
    
}


function calculate() {
    
    let txt = document.getElementById('txt');
    
    let num = document.querySelector("input").value;
    
    for (var i = 0; i < array2.length; i++) {

        txt.innerHTML += (num * array2[i]) + ", ";

        console.log(array2[i] * num);
        
}

}


button.onclick = calculate;


button2.onclick = clear;