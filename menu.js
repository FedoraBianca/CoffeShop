window.onload = function () { 

    var path = window.location.pathname;
    var page = path.split("/").pop();
    var tab = document.getElementsByClassName("outlink");
    
    for( i=0; i<tab.length; i++){
       if(tab[i].getAttribute("href") == page){         
            tab[i].classList.remove("page");
            tab[i].classList.add("currentpage");        
       }
    }
}