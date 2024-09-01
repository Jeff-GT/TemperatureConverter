
function celToFah(){
    let tempNum=Number(prompt("Value of Temperature"));
    let res=(tempNum*9/5)+32;
    console.log(result);
    
    if(res<50){
        document.getElementById("result").innerHTML=`
        <div class="cold-temp">
        
        ${tempNum}°C = ${res}°F
        
        </div>`;
    }
    else if(res>=50&&res<=86){
        document.getElementById("result").innerHTML=`
        <div class="normal-temp">
        
        ${tempNum}°C = ${res}°F
        
        </div>`;
    }
    else{
        document.getElementById("result").innerHTML=`
        <div class="hot-temp">
        
        ${tempNum}°C = ${res}°F
        
        </div>`;
    }
}

function fahToCel(){
    let tempNum=Number(prompt("Value of Temperature"));
    let res=(tempNum-32)*5/9;
    console.log(result);
    
    if(res<10){
        document.getElementById("result").innerHTML=`
        <div class="cold-temp">
        
        ${tempNum}°F = ${res}°C
        
        </div>`;
    }
    else if(res>=10&&res<=30){
        document.getElementById("result").innerHTML=`
        <div class="normal-temp">
        
        ${tempNum}°F = ${res}°C
        
        </div>`;
    }
    else{
        document.getElementById("result").innerHTML=`
        <div class="hot-temp">
        
        ${tempNum}°F = ${res}°C
        
        </div>`;
    }
}