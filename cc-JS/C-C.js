var index = 0;
function colourchange(){
    var colors = ["red","green","blue","pink","purple","brown"];
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    if(index > colors.length -1);
        // index = 0;
}

