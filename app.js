function change(){
    var img=document.getElementById("bulb");
    if(img.src.match("off"))
    {
        img.src="bulb on.jpg";

    }
    else{
        img.src="bulb off.jpg";
    }
}