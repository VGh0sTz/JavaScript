function cambiarimg(){
    let ima= document.getElementById('img')
    if (ima.src.match('Rumania2.jpg')) {
        ima.src = "Rumania3.jpg";
    } else {
        ima.src = "Rumania2.jpg";
    }
}