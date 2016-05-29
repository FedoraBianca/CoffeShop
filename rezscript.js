






var x = Math.floor((Math.random() * 10)/2 + 1);
var clasa = "masa";
var resclass = clasa.concat(x.toString());    
var toReserve = document.getElementsByClassName(resclass);    
for(var i=0; i<toReserve.length; i++){
    toReserve[i].setAttribute("fill","Maroon "); 
}    
    
var pastSelection;
var selected = 0;

    
    function ch(evt){
        svgDoc = evt.target.ownerDocument;    
        myArray =svgDoc.getElementsByClassName(evt.target.getAttribute("class"));
        
        if(selected >0){
            for(var i=0; i<pastSelection.length; i++){ 
                pastSelection[i].setAttribute("fill","LawnGreen ");
            }
        }
        
        if( myArray[1].getAttribute("fill") == "Maroon "){
            alert("Puteti selecta doar mese disponibile!");
        }else{
            for(var i=0; i<myArray.length; i++){ 
                selected = 1;
                myArray[i].setAttribute("fill","LightSlateGrey ");
            }
        }

    
        pastSelection = myArray;
  

    }
    
