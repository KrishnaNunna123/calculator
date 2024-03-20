const  firstnumber=document.getElementById("firstnumber");
const res=document.getElementById("result")

const secondnumber=document.getElementById("secondnumber");
let value1=firstnumber.value;

function addition( ){
    
    let value=parseInt(firstnumber.value)+parseInt(secondnumber.value)
    res.textContent= value;


}
function subtraction( ){
    
    let value=parseInt(firstnumber.value)-parseInt(secondnumber.value)
    res.textContent= value;


}
function multiplication( ){
    
    let value=parseInt(firstnumber.value)*parseInt(secondnumber.value)
    res.textContent= value;


}
function division( ){
    
    let value=parseInt(firstnumber.value)/parseInt(secondnumber.value)
    res.textContent= value;


}
