// function changeColor(){
// document.getElementById("myPara").style.color="red";}

function underline(){
// document.getElementById("myPara").style.textDecoration="Underline";
if (document.getElementById("myPara").style.textDecoration=="")
{document.getElementById("myPara").style.textDecoration="Underline"} else
{document.getElementById("myPara").style.textDecoration="";}

}

function bold(){
    // document.getElementById("myPara").style.fontWeight="Bold";
if (document.getElementById("myPara").style.fontWeight=="")
{document.getElementById("myPara").style.fontWeight="bold"} else
{document.getElementById("myPara").style.fontWeight="";}
}

function italic(){
    // document.getElementById("myPara").style.fontStyle="italic";
if (document.getElementById("myPara").style.fontStyle=="") document.getElementById("myPara").style.fontStyle="italic";
else {document.getElementById("myPara").style.fontStyle="";}
}



function change_size(){
    document.getElementById("myPara").style.fontSize=size.value;
}

function change_font(){
    document.getElementById("myPara").style.fontFamily=font.value;
}

function change_color(){
    document.getElementById("myPara").style.color=color.value;

}
// jQuery is written in your “.js” file.
