

window.onload = function () {



var rad = document.myForm.myRadios;
for(var i = 0; i < rad.length; i++) {
    rad[i].onclick = function() {
        if( this.value == "true"){
            alert("da");
            divArray = document.getElementsByTagName("div");
            for( var i = 0; i<divArray.length;i++){
                if( divArray[i].classList.contains("nofade") ){
                    divArray[i].classList.remove("nofade");
                    divArray[i].classList.add("fade");
                }
            }
            
        }else{
            alert("nu");
            divArray = document.getElementsByTagName("div");
            for( var i = 0; i<divArray.length;i++){
                if( divArray[i].classList.contains("fade") ){
                    divArray[i].classList.remove("fade");
                    divArray[i].classList.add("fade");
                }
            }
        }
    };
}
    

    
elemArray = document.getElementsByClassName("fade");
opacity = 0;
for( var i = 0; i<elemArray.length;i++)
elemArray[i].style.opacity ="0";

var myVar = setInterval(function(){ myFadeOut() }, 100);

function myFadeOut() {
          for( var i = 0; i<elemArray.length;i++)
      elemArray[i].style.opacity = ""+opacity;
      opacity += 0.1;
     if(opacity >= 1) {
         clearInterval(myVar);
     }
}
}


