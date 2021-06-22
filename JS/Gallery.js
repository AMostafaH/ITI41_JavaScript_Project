/*================ Start Gallery ==================*/

function show(e){
    var image = document.getElementById(e.target.id);
    var ImageShown = document.getElementById("imageBoxView");
    ImageShown.style.backgroundImage = "url("+image.src+")";
    //console.log(document.getElementById(e.target.id));
}

/*================ End Gallery ==================*/


