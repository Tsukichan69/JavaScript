function add(nombre1, nombre2) {
    return nombre1 + nombre2;
}
function lancerCalcul(event) {
    event.preventDefault();
    var n1 = document.getElementById("nombre1").value;
    var n2 = document.getElementById("nombre2").value;
    console.log(add(parseInt(n1), parseInt(n2)));
}
document.getElementById("form").addEventListener("submit", lancerCalcul);
