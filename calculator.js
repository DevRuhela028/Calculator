
function handleClick(el){  
    const ele = document.getElementById('in');
    const out = document.getElementById('out'); 
    const exp = ele.value + el.innerText;
    ele.value = exp;
    var ans = eval(exp);
    out.value = ans;
}
function reset(){
    const ele = document.getElementById('in');
    const out = document.getElementById('out');
    ele.value = "";
    out.value = "";
}
