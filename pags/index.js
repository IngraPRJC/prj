var p = 0
var t = document.getElementById('b')
var e = document.getElementById('m')
function menu(){
    if(p == 0){
        t.style.transform = 'translateX(100%)'
        p++
        e.style.paddingLeft = "100px"
        e.style.width = "75%"
    }else{
        t.style.transform = 'translateX(0%)'
        p = 0
        e.style.paddingLeft = "0px"
        e.style.width = "75%"
    }
}
