//VARS

const aSide= document.getElementById('sideA');
const bSide= document.getElementById('sideB');
const cSide= document.getElementById('sideC');
const button=document.getElementById('calculate');
let result=document.getElementById('result');

//EVENTS

eventsListeners();

function eventsListeners(){
    //When the form is sent, the values are calculated
    document.getElementById('calculate').addEventListener('click', calculate);

}

//Functions

function calculate(e){
    //we prevent form default action
    e.preventDefault();
    let isTriangle;
    let a= aSide.value;
    let b= bSide.value;
    let c= cSide.value;
    //we verify if its a triangle first
    isTriangle = verifyTriangle(a,b,c);
    
    if (isTriangle){
        typeTriangle(a,b,c)
    }
}

function verifyTriangle(a,b,c){
    if ((a < b + c) && (a > b - c)){
        return true;
    }else{
        false;
        result.innerText="Sorry, its not a triangle";
    }
}

function typeTriangle(a,b,c){
    if(Equilatero(a,b,c)){
        result.innerText="Equilatero";
    }else if(Isosceles(a,b,c)){
        result.innerText="Isosceles";
    }else{
        result.innerText="Escaleno"
    }

}

function Equilatero(a,b,c){
    return (a==b && a==c);
}

function Isosceles(a,b,c){
    return (a===b || a===c);
}