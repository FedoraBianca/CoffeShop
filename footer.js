

window.onload = function () {
    var rad = document.myForm.myRadios;
for(var i = 0; i < rad.length; i++) {
    rad[i].onclick = function() {
        alert(this.value)
    };
}     
}


