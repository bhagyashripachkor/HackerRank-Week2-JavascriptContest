<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
        <style>
         .buttonContainer{
            width:75%;
           }
            
            .buttonContainer > .buttonClass{
            font-size:24px;
            height:48px;
            width:30%;
            }
        </style>
        
    </head>
    <body>
        <script type="text/javascript">
function move() { 
var val=document.getElementById("btn1").value;
var curr = document.getElementById("btn4").value;
document.getElementById("btn1").innerHTML=curr;
document.getElementById("btn1").value=curr;
curr = document.getElementById("btn7").value;
document.getElementById("btn4").innerHTML=curr;
document.getElementById("btn4").value=curr;
curr = document.getElementById("btn8").value;
document.getElementById("btn7").innerHTML=curr;
document.getElementById("btn7").value=curr;
curr = document.getElementById("btn9").value;
document.getElementById("btn8").innerHTML=curr;
document.getElementById("btn8").value=curr;
curr = document.getElementById("btn6").value;
document.getElementById("btn9").innerHTML=curr;
document.getElementById("btn9").value=curr;
curr = document.getElementById("btn3").value;
document.getElementById("btn6").innerHTML=curr;
document.getElementById("btn6").value=curr;
curr = document.getElementById("btn2").value;
document.getElementById("btn3").innerHTML=curr;
document.getElementById("btn3").value=curr;
document.getElementById("btn2").innerHTML=val; 
document.getElementById("btn2").value=val; 
            }
        </script>
        <div id="btns" class="buttonContainer">   
            <button id="btn1" value="1" class="buttonClass">1</button>
            <button id="btn2" value="2"class="buttonClass">2</button>
            <button id="btn3" value="3"class="buttonClass">3</button>
            <button id="btn4" value="4" class="buttonClass">4</button>
            <button id="btn5"  value="5"class="buttonClass" onclick="move()">5</button>
            <button id="btn6" value="6" class="buttonClass">6</button>
            <button id="btn7"  value="7" class="buttonClass">7</button>
            <button id="btn8" value="8" class="buttonClass">8</button>
            <button id="btn9"  value="9" class="buttonClass">9</button>
        </div>
    </body>
</html>
