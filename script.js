function show () {
    document.getElementById("box").style.display = "block";
}

function hide () {
    document.getElementById("box").style.display= "none";
}

function show_hide(){
    var box = document.getElementById("box");

    if(box.style.display == "none"){
        show();
        window.scrollTo(0, 1100); 
    }else{
        hide();
    }
}