var totaltip=0.00
var totalbill=0.00
document.getElementById("outtip").innerHTML=totaltip
document.getElementById("outtotal").innerHTML=totalbill

function bill(){
    amount=document.getElementById("billvalue").value
    totalbill=amount
    console.log(totalbill)
    console.log(amount)
    document.getElementById("outtotal").innerHTML=totalbill
}
function tip(){
    tipp=document.getElementById("tipvalue").value
    totaltip=(totalbill*(tipp/100))
    document.getElementById("outtip").innerHTML=totaltip
    aftertip=Number(totalbill)+Number(totaltip)
    document.getElementById("outtotal").innerHTML=aftertip
    console.log(tipp)
    console.log(totaltip)
}
function people(){
    peop=document.getElementById("npeople").value
    if(peop>1)
    {
        var t=(Number(totaltip)/Number(peop))
        var b=(Number(aftertip)/Number(peop))
        document.getElementById("outtip").innerHTML=t+"(per person)"
        document.getElementById("outtotal").innerHTML=b+"(per person)"
    }
    console.log(peop)
}