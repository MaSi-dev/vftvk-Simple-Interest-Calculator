function compute() // compute the final interest
{
    var principalIsCorrect = validation()
    if(principalIsCorrect){ 
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year "+year+"\<br\>"    
    }
}
function updateRate(){ // Update the field of rate
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
function validation(){
    var principalIsCorrect = true
    var principleValue = document.getElementById("principal").value;
    if(principleValue <= 0){ //alert the user to change the value
        principalIsCorrect = false
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
    }
    return principalIsCorrect
}
        