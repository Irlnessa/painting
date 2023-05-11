var colors = []
var color = "red"
var size = 15

colors[0]= document.getElementById("red")
colors[1]= document.getElementById("green")
colors[2]= document.getElementById("blue")
colors[3]= document.getElementById("yellow")
colors[4]= document.getElementById("pink")
colors[5]= document.getElementById("black")
colors[6]= document.getElementById("white")
colors[7]= document.getElementById("orangered")
colors[8]= document.getElementById("lightgreen")
colors[9]= document.getElementById("lightblue")
colors[10]= document.getElementById("orange")
colors[11]= document.getElementById("indigo")
colors[12]= document.getElementById("brown")
colors[13]= document.getElementById("beige")

colors[0].style.height = "80px"
colors[0].style.width = "80px"

var spisok = document.getElementById("spisok")
spisok.addEventListener("click",pickColor)


var paint = document.getElementById("canvas")
var context = paint.getContext("2d")
paint.addEventListener("mousemove", draw)



function pickColor(e){
    console.log(e.target.tagName)
    if(e.target.tagName =="LI"){

        if(e.target.id == "red"){
            color="red"
        }
        else if(e.target.id == "green"){
            color="green"
        }
        else if(e.target.id == "blue"){
            color="blue"
        }
        else if(e.target.id == "yellow"){
            color="yellow"
        }
        else if(e.target.id == "pink"){
            color="pink"
        }
        else if(e.target.id == "black"){
            color="black"
        }
        else if(e.target.id == "white"){
            color="white"
        }
        else if(e.target.id == "lightgreen"){
            color="lightgreen"
        }
        else if(e.target.id == "lightblue"){
            color="lightblue"
        }
        else if(e.target.id == "orange"){
            color="orange"
        }
        else if(e.target.id == "indigo"){
            color="indigo"
        }
        else if(e.target.id == "brown"){
            color="brown"
        }
        else if(e.target.id == "beige"){
            color="beige"
        }
        else if(e.target.id == "orangered"){
            color="orangered"
        }


    }



        for (var i = 0; i <= 13; i ++){
            colors[i].style.width = "50px";
            colors[i].style.height = "50px";
        }
        e.target.style.width = "80px";
        e.target.style.height = "80px";
    
}


function bolshe(){
    size++;
    document.getElementById("max").innerHTML = count;
}
function menshe(){
    size--;
    document.getElementById("min").innerHTML = count;
}






function draw(e){
    if (e.which == 1){
        context.fillStyle = color;
        context.beginPath();
        context.arc(e.offsetX,e.offsetY,size,0, Math.PI*2);
        context.fill();
    }
}