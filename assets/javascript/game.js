var target = Math.floor(Math.random() * 101) + 19  
var red = Math.floor(Math.random() * 12) + 1 
var blue = Math.floor(Math.random() * 12) + 1 
var yellow = Math.floor(Math.random() * 12) + 1 
var green = Math.floor(Math.random() * 12) + 1 
function onload(){
    document.getElementById("target").innerHTML = target;
}
function addRed() {
    var result = parseInt(document.getElementById("result").innerHTML) + red
    document.getElementById("result").innerHTML = result;
    compare(target, result)
}
function addBlue() {
    var result = parseInt(document.getElementById("result").innerHTML) + blue
    document.getElementById("result").innerHTML = result;
    compare(target, result)
}
function addYellow() {
    var result = parseInt(document.getElementById("result").innerHTML) + yellow
    document.getElementById("result").innerHTML = result;
    compare(target, result)
}
function addGreen() {
    var result = parseInt(document.getElementById("result").innerHTML) + green
    document.getElementById("result").innerHTML = result;
    compare(target, result)
}

function compare(target, result){
    if(parseInt(result)<parseInt(target)){
        console.log("still compare")
    }
    else{
        if (parseInt(target)==parseInt(result)){
            var result = parseInt(document.getElementById("win").innerHTML) + 1
            console.log("result-win:" + result)
            document.getElementById("win").innerHTML = result;
        }
        if(parseInt(result)>parseInt(target)){
            var result = parseInt(document.getElementById("lose").innerHTML) + 1
            console.log("result-lose:" + result)
            document.getElementById("lose").innerHTML = result;
        }
        target = Math.floor(Math.random() * 101) + 19  
        red = Math.floor(Math.random() * 12) + 1 
        blue = Math.floor(Math.random() * 12) + 1 
        yellow = Math.floor(Math.random() * 12) + 1 
        green = Math.floor(Math.random() * 12) + 1
        document.getElementById("target").innerHTML = target;
        document.getElementById("result").innerHTML = "0"
    }
    

}