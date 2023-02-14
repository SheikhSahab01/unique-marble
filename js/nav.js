$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

function productli(){
    document.getElementById("subp").style.visibility = "visible";
    
}

function productout(){
    document.getElementById("subp").style.visibility = "hidden";
    
}

