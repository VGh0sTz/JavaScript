function cambiarimg(){
    let ima= document.getElementById('img')
    if (ima.src.match('Rumania2.jpg')) {
        ima.src = "Rumania3.jpg";
    } else if(ima.src.match('Rumania3.jpg')) {
        ima.src = "Rumania4.jpg";
    } else if(ima.src.match('Rumania4.jpg')) {
        ima.src = "Rumania5.png";
    } else if(ima.src.match('Rumania5.png')) {
        ima.src = "Rumania2.jpg";
    }
}