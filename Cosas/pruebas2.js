let a = prompt ("Introduce un numero");
let b

switch (a) {
    case 1:
        b=6
        break;
    case 2:
        b=5
        break;
    case 3:
        b=4
        break;
    case 4:
        b=3
        break;
    case 5:
        b=2
        break;
    case 6:
        b=1
        break;
    default:
        break;
}

if (a != null) {
    document.getElementById("demo").innerHTML =
    "La cara contraria" + a + " es el :" + b;
  }