function search() {
    document.getElementById("postclick-search").opacity = "1";
    document.getElementById("form").style.bottom = "50vh";
    document.getElementById("blur").style.display = "block";
    //console.log(document.getElementById("form").bottom);
    //document.getElementById("postclick-search").opacity = "1";

}
var clickHandler = function () {
    document.getElementById("blur").style.display = "none";
    document.getElementById("form").style.bottom = "-100px";
}

document.getElementById('blur').addEventListener('click', clickHandler);