function CUBE() {
    var MinHeight = 150;
    var shadowRed = RandomInt(225);
    var shadowGreen = RandomInt(225);
    var shadowBlue = RandomInt(225);
    var borderRed = RandomInt(225);
    var borderGreen = RandomInt(225);
    var borderBlue = RandomInt(225);
    var red = RandomInt(225);
    var green = RandomInt(225);
    var blue = RandomInt(225);
    var deg = RandomInt(360);
    var StringBoxShadow = "0px 30px 0px 0px rgba("+red+", "+green+", "+blue+", 1),"+
    "0px 30px 0px 0px rgba("+red+", "+green+", "+blue+", 0.5),"+
    "0px 30px 0px 0px rgba("+red+", "+green+", "+blue+", 0.5),"+
    "0px 30px 0px 0px rgba("+red+", "+green+", "+blue+", 0.5),"+
    "0px 30px 00px 0px rgba("+red+", "+green+", "+blue+", 0.25),"+
    "0px 30px 0px 0px rgba("+red+", "+green+", "+blue+", 0.25)";
    document.getElementById("CUBE").style.backgroundColor = "rgb("+red+" "+green+" "+blue+")";
    document.getElementById("CUBE").style.borderColor = "rgb("+borderRed+" "+borderGreen+" "+borderBlue+")";
    document.getElementById("CUBE").style.boxShadow = StringBoxShadow;
    document.getElementById("CUBE").style.borderRadius = RandomInt(50,0) + "%"
    document.getElementById("CUBE").style.width = RandomInt(400, 200) + "px";
    document.getElementById("CUBE").style.height = RandomInt(300, 150) + "px";


    

}











function RandomInt (max, min) {
    return Math.floor (Math.random () * max);
}
