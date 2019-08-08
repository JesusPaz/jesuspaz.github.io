function show_front () {
    document.getElementById("box_front").style.display = "block";
    document.getElementById("box_back").style.display= "none";

}

function hide_front () {
    document.getElementById("box_front").style.display= "none";
}

function show_hide_front(){
    var box = document.getElementById("box_front");

    if(box.style.display == "none"){
        show_front();
        window.scrollTo(0, 1100); 
    }else{
        hide_front();
    }
}


function show_back () {
    document.getElementById("box_back").style.display = "block";
    document.getElementById("box_front").style.display= "none";

}

function hide_back () {
    document.getElementById("box_back").style.display= "none";
}

function show_hide_back(){
    var box = document.getElementById("box_back");

    if(box.style.display == "none"){
        show_back();
        window.scrollTo(0, 1100); 
    }else{
        hide_back();
    }
}