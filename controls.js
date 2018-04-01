document.getElementById("colorinp").addEventListener("change", function(){
       document.getElementById("preview").style.backgroundColor = this.value;
});

function changeType(type){
    document.getElementById("range1").type = type;
       document.getElementById("range2").type = type;
       document.getElementById("range3").type = type;
       document.getElementById("range4").type = type;
}

document.getElementById("Number").addEventListener("click", function(){
    changeType("number");
});

document.getElementById("Range").addEventListener("click", function(){
    changeType("range");
});

document.getElementById("range1").addEventListener("change", function(){
    document.getElementById("hair").style.width = this.value+"%";
});
document.getElementById("range2").addEventListener("change", function(){
    document.getElementById("eyes").style.width = this.value+"%";
});
document.getElementById("range3").addEventListener("change", function(){
    document.getElementById("nose").style.width = this.value+"%";
});
document.getElementById("range4").addEventListener("change", function(){
    document.getElementById("mouth").style.width = this.value+"%";
});
var display = document.getElementById("display");

var HairInterval = 1;
hair.addEventListener("click", function(){
    HairInterval++;
    if (HairInterval == 4){
        HairInterval = 1;}
    hair.src = "img/hair"+HairInterval+".png"; 
});
var EyesInterval = 1;
eyes.addEventListener("click", function(){
    EyesInterval++;
    if (EyesInterval == 4){
        EyesInterval = 1;}
    hair.src = "img/hair"+EyeInterval+".png"; 
});

var NoseInterval = 1;
nose.addEventListener("click", function(){
    NoseInterval++;
    if (NoseInterval == 4){
        NoseInterval = 1;}
    nose.src = "img/nose"+NoseInterval+".png"; 
});

var MouthInterval = 1;
mouth.addEventListener("click", function(){
    MouthInterval++;
    if (MouthInterval == 4){
        MouthInterval = 1;}
    mouth.src = "img/mouth"+MouthInterval+".png"; 
});
index = 0;
function createFace(){
    index++;
    var newface = document.createElement("div");
    newface.className = "col-sm-3 col-md-2 col-lg-1.5 col-xl-1";
    newface.id = "newface"+index;
    newface.style.height = "100px";
    newface.style.width = "100px";
    newface.style.display = "inline-block";
    newface.style.backgroundColor = document.getElementById("preview").style.backgroundColor;
    newface.style.position = "relative";
    display.appendChild(newface);
    
    var newhair = document.createElement("img");
    newhair.className = "newitems";
    newhair.src = hair.src;
    newhair.style.cssText = hair.style.cssText;
    document.getElementById("newface"+index).appendChild(newhair);
    
    var neweyes = document.createElement("img");
    neweyes.className = "newitems";
    neweyes.src = eyes.src;
    neweyes.style.cssText = eyes.style.cssText;
    
    document.getElementById("newface"+index).appendChild(neweyes); 
    
    var newnose = document.createElement("img");
    newnose.className = "newitems";
    newnose.src = nose.src;
    newnose.style.cssText = nose.style.cssText;
    document.getElementById("newface"+index).appendChild(newnose);    
    
    var newmouth = document.createElement("img");
    newmouth.className = "newitems";
    newmouth.src = mouth.src;
    newmouth.style.cssText = mouth.style.cssText;
    document.getElementById("newface"+index).appendChild(newmouth);
}

document.getElementById("add").addEventListener("click", function(){
    createFace();
});



function randomFace(){
    randrange1 = Math.floor((Math.random() * 3) + 1);
    randrange2 = Math.floor((Math.random() * 3) + 1);
    randrange3 = Math.floor((Math.random() * 3) + 1);
    randrange4 = Math.floor((Math.random() * 3) + 1);
    var randcolor ='rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    
    hair.src = "img/hair"+randrange1+".png";
    eyes.src = "img/eyes"+randrange2+".png";
    nose.src = "img/nose"+randrange3+".png";
    mouth.src = "img/mouth"+randrange4+".png";
    document.getElementById("preview").style.backgroundColor = randcolor
}

document.getElementById("Random").addEventListener("click", function(){
    randomFace();
});

document.getElementById("AutoRandom").addEventListener("click", function(){
    timer = setInterval(randomFace, 500);
});
    
document.getElementById("StopAutoRandom").addEventListener("click", function(){
    clearInterval(timer);
});

