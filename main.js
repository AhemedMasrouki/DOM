function plus(event){
    var qt=event.target.parentNode.querySelector(".qt")
    qt.innerHTML=Number(qt.innerHTML)+1
    console.log(qt)
}
function moins(event){
    var qt=event.target.parentNode.querySelector(".qt")
    qt.innerHTML=Number(qt.innerHTML)-1
    console.log(qt)
}
var sum=0
price=document.getElementsByClassName("price")
qu=document.q


