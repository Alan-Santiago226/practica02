console.log("Imprimir mensajes en consola");

//alert("Imprimir mensaje en una ventana");

var x = 0;
var y = 0;
var name = "Luz";

var ciertoFalso = true;

var myArray = ["Luz", "Fernando", "Leo", "Melissa"];

var body = document.getElementsByTagName("body");

var row = document.getElementsByClassName("row");

//console.log(x + " " + name);

ciertoFalso = false;

function imprimirMensaje(){
   /* for(var i = 0; i <  row.length; i++) {
        row[i].classList.add("row-" +i);
        console.log(row[i]);
    }*/
    switch(x){
        case 0: alert("What're you doing here?");
        break;
        case 1: alert("This is my first practice");
        break;
        case 2: alert("Don't press the other button");
        break;
        case 3: alert("You're still here?");
        break;
        case 4: alert("Ģ̴̧̠̼̜̗̳̼͉͇͍̥̿͆͌͠Ẻ̴̡̱̪͉͔͚̟͚̻͖͙͉̙Ţ̵̛̺̮̝̪͎̇̿́͝ ̵̦̰̯͚̫̻̍͊̋́̑̎̃̃̈́͆̑͋͋͝  Ơ̴̗̤͇͉̮̻̪̞̩̲̥̭̊͑̀͂͒͐̇̅̿́̄̃̾̊̕ͅŲ̶̛͈̝͖͙̫̘͈͎͔̟̿͆̆̓̇̄Ṱ̶̢̩̤̳̱̗͙̭̟̰̪̯͂̋̂̆̊̕");
        break;
        default: alert("Have a good day ☻"); x=x-1;
    }
    x= x+1;
}

function Redirigir(){
     switch(y){
         case 0: alert("Enjoy! ♪♫"); window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); y= y+1;
         break;
         default: window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
     }
     
 }

 function hidden(){
     window.open("https://www.youtube.com/watch?v=65_ellcYMe8");
 }