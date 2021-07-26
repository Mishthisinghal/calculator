let screen=document.getElementById("box");
let screentext="";
function number(value){
    screen.value +=value;
}
function equalto(){
    screen.value=eval(screen.value);
}
function clearscrn(){
    screen.value="";
}
function del(){
    let a=screen.value;
    screen.value=a.substr(0,a.length-1);
}
function square(){
    screen.value=Math.pow(screen.value,2);
}
function cube(){
    screen.value=Math.pow(screen.value,3);
}
function root2(){
    screen.value=Math.sqrt(screen.value);
}
function root3(){
    screen.value=Math.cbrt(screen.value);
}
function sine(){
    screen.value=Math.sin(screen.value);
}
function cosine(){
    screen.value=Math.cos(screen.value);
}
function tangent(){
    screen.value=Math.tan(screen.value);
}
function percent(){
    let a=screen.value;
    let c=eval(a);
    screen.value=c/100;
}