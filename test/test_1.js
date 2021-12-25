function CUBE() {
    var borderStyleWord = ["dashed", "dotted", "solid"];
    var shadowRed = RandomInt(225, 0);
    var shadowGreen = RandomInt(225, 0);
    var shadowBlue = RandomInt(225, 0);
    var borderRed = RandomInt(225, 0);
    var borderGreen = RandomInt(225, 0);
    var borderBlue = RandomInt(225, 0);
    var red = RandomInt(225, 0);
    var green = RandomInt(225, 0);
    var blue = RandomInt(225, 0);
    var deg = RandomInt(360);
    var StringBoxShadow = "0px 30px 0px 0px rgba("+red+", "+green+", "+blue+", 1),"+
    "0px 30px 0px 0px rgba("+red+", "+green+", "+blue+", 0.5),"+
    "0px 30px 0px 0px rgba("+red+", "+green+", "+blue+", 0.5),"+
    "0px 30px 0px 0px rgba("+red+", "+green+", "+blue+", 0.5),"+
    "0px 30px 00px 0px rgba("+red+", "+green+", "+blue+", 0.25),"+
    "0px 30px 0px 0px rgba("+red+", "+green+", "+blue+", 0.25)";
    document.getElementById("CUBE").style.backgroundColor = "rgb("+red+" "+green+" "+blue+")";
    document.getElementById("CUBE").style.borderColor = "rgb("+borderRed+" "+borderGreen+" "+borderBlue+")";
    document.getElementById("CUBE").style.borderWidth = RandomInt(20) + "px";
    document.getElementById("CUBE").style.borderStyle = borderStyleWord[RandomInt(2,0)];
    document.getElementById("CUBE").style.boxShadow = StringBoxShadow;
    document.getElementById("CUBE").style.borderRadius = RandomInt(50,0) + "%"
    document.getElementById("CUBE").style.width = RandomInt(500, 200) + "px";
    document.getElementById("CUBE").style.height = RandomInt(400, 150) + "px"; 


    

}











function RandomInt (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

