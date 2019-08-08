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
    }else{
        hide();
    }
}