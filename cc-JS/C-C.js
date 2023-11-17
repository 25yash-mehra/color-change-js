var index = 0;
function colourChange(){
    var colors = ["red","green","blue","pink","purple","brown","violet","orange","yellow","lightblue","aqua","darkgreen","lightgreen","black"];
    document.getElementsByTagName("body")[0].style.background = colors[index++];
        if(index > colors.length - 1) 
        index = 0;
}

