 var clicks = 17;
    function clickME() {
    if (clicks <= 17) {
       clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        this.removeEventListener('clicks', clickME);
     } else{
    document.getElementById("id").disabled=true;
}
}
