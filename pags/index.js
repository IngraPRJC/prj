var p = 0
var t = document.getElementById('b')
var e = document.querySelector('main')
function menu(){
    if(p == 0){
        t.style.transform = 'translateX(100%)'
        p++
        e.style.marginLeft = '50px'
    }else{
        t.style.transform = 'translateX(0%)'
        p = 0
        e.style.margin = '0px'
    }
}
