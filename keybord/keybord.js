var disp = document.getElementById('keyboard')
function appendToDisplay(value1){
disp.value += value1
}
function back(){
    var l = disp.value;
    disp.value=l.slice(0,-1)
}