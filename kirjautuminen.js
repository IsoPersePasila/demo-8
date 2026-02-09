document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === "kylla") {
        document.getElementById('tervetulo_teksti').textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
    }
    else{
        document.getElementById("ulos_kirjaudu").style.display = "none";
    }
}
function kirjauduUlos(){
    if(localStorage.getItem("kirjautunut") === "kylla") {
        localStorage.removeItem("kirjautunut")
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla")
}