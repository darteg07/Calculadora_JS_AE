var operandoa;
var operandob;
var operacion;

function init(){

  var display = document.getElementById('display');
  var on = document.getElementById('on');
  var suma = document.getElementById('suma');
  var menos = document.getElementById('menos');
  var por = document.getElementById('por');
  var dividido = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
  var punto = document.getElementById('punto');
  var punto = document.getElementById('sign');
  var uno = document.getElementById("dos");

}

//efecto click en los botones
var diecinueve = document.getElementById("raiz");

diecinueve.addEventListener("mousedown",function(){
            diecinueve.setAttribute("style","transform:scale(0.85,0.85)")
        })
        diecinueve.addEventListener("mouseup",function(){
            diecinueve.setAttribute("style","transform:scale(1,1)")
        })
var dieciocho = document.getElementById("sign");

dieciocho.addEventListener("mousedown",function(){
            dieciocho.setAttribute("style","transform:scale(0.85,0.85)")
        })
        dieciocho.addEventListener("mouseup",function(){
            dieciocho.setAttribute("style","transform:scale(1,1)")
        })
var diecisiete = document.getElementById("on");

diecisiete.addEventListener("mousedown",function(){
            diecisiete.setAttribute("style","transform:scale(0.85,0.85)")
        })
        diecisiete.addEventListener("mouseup",function(){
            diecisiete.setAttribute("style","transform:scale(1,1)")
        })
var dieciseis = document.getElementById("punto");

dieciseis.addEventListener("mousedown",function(){
            dieciseis.setAttribute("style","transform:scale(0.85,0.85)")
        })
        dieciseis.addEventListener("mouseup",function(){
            dieciseis.setAttribute("style","transform:scale(1,1)")
        })
var quince = document.getElementById("cero");

quince.addEventListener("mousedown",function(){
            quince.setAttribute("style","transform:scale(0.85,0.85)")
        })
        quince.addEventListener("mouseup",function(){
            quince.setAttribute("style","transform:scale(1,1)")
        })
var catorce = document.getElementById("igual");

catorce.addEventListener("mousedown",function(){
            catorce.setAttribute("style","transform:scale(0.85,0.85)")
        })
        catorce.addEventListener("mouseup",function(){
            catorce.setAttribute("style","transform:scale(1,1)")
        })
var trece = document.getElementById("dividido");

trece.addEventListener("mousedown",function(){
            trece.setAttribute("style","transform:scale(0.85,0.85)")
        })
        trece.addEventListener("mouseup",function(){
            trece.setAttribute("style","transform:scale(1,1)")
        })

var doce = document.getElementById("por");

doce.addEventListener("mousedown",function(){
            doce.setAttribute("style","transform:scale(0.85,0.85)")
        })
        doce.addEventListener("mouseup",function(){
            doce.setAttribute("style","transform:scale(1,1)")
        })
var once = document.getElementById("suma");

once.addEventListener("mousedown",function(){
            once.setAttribute("style","transform:scale(0.85,0.85)")
        })
        once.addEventListener("mouseup",function(){
            once.setAttribute("style","transform:scale(1,1)")
        })
var diez = document.getElementById("menos");

diez.addEventListener("mousedown",function(){
            diez.setAttribute("style","transform:scale(0.85,0.85)")
        })
        diez.addEventListener("mouseup",function(){
            diez.setAttribute("style","transform:scale(1,1)")
        })
var diez = document.getElementById("menos");

diez.addEventListener("mousedown",function(){
            diez.setAttribute("style","transform:scale(0.85,0.85)")
        })
        diez.addEventListener("mouseup",function(){
            diez.setAttribute("style","transform:scale(1,1)")
        })
var nueve = document.getElementById("nueve");

nueve.addEventListener("mousedown",function(){
            nueve.setAttribute("style","transform:scale(0.85,0.85)")
        })
        nueve.addEventListener("mouseup",function(){
            nueve.setAttribute("style","transform:scale(1,1)")
        })

var ocho = document.getElementById("ocho");

ocho.addEventListener("mousedown",function(){
            ocho.setAttribute("style","transform:scale(0.85,0.85)")
        })
        ocho.addEventListener("mouseup",function(){
            ocho.setAttribute("style","transform:scale(1,1)")
        })
var siete = document.getElementById("siete");

siete.addEventListener("mousedown",function(){
            siete.setAttribute("style","transform:scale(0.85,0.85)")
        })
        siete.addEventListener("mouseup",function(){
            siete.setAttribute("style","transform:scale(1,1)")
        })
var seis = document.getElementById("seis");

seis.addEventListener("mousedown",function(){
            seis.setAttribute("style","transform:scale(0.85,0.85)")
        })
        seis.addEventListener("mouseup",function(){
            seis.setAttribute("style","transform:scale(1,1)")
        })
var cinco = document.getElementById("cinco");

cinco.addEventListener("mousedown",function(){
            cinco.setAttribute("style","transform:scale(0.85,0.85)")
        })
        cinco.addEventListener("mouseup",function(){
            cinco.setAttribute("style","transform:scale(1,1)")
        })
var cuatro = document.getElementById("cuatro");

cuatro.addEventListener("mousedown",function(){
            cuatro.setAttribute("style","transform:scale(0.85,0.85)")
        })
        cuatro.addEventListener("mouseup",function(){
            cuatro.setAttribute("style","transform:scale(1,1)")
        })
var tres = document.getElementById("tres");

tres.addEventListener("mousedown",function(){
            tres.setAttribute("style","transform:scale(0.85,0.85)")
        })
        tres.addEventListener("mouseup",function(){
            tres.setAttribute("style","transform:scale(1,1)")
        })
var dos = document.getElementById("dos");

dos.addEventListener("mousedown",function(){
            dos.setAttribute("style","transform:scale(0.85,0.85)")
        })
        dos.addEventListener("mouseup",function(){
            dos.setAttribute("style","transform:scale(1,1)")
        })
var uno = document.getElementById("uno");

uno.addEventListener("mousedown",function(){
            uno.setAttribute("style","transform:scale(0.85,0.85)")
        })
        uno.addEventListener("mouseup",function(){
            uno.setAttribute("style","transform:scale(1,1)")
        })




  uno.onclick = function(e){
      display.textContent = display.textContent  + "1";
  }
  dos.onclick = function(e){
      display.textContent = display.textContent  + "2";
  }
  tres.onclick = function(e){
      display.textContent = display.textContent  + "3";
  }
  cuatro.onclick = function(e){
      display.textContent = display.textContent  + "4";
  }
  cinco.onclick = function(e){
      display.textContent = display.textContent  + "5";
  }
  seis.onclick = function(e){
      display.textContent = display.textContent  + "6";
  }
  siete.onclick = function(e){
      display.textContent = display.textContent  + "7";
  }
  ocho.onclick = function(e){
      display.textContent = display.textContent  + "8";
  }
  nueve.onclick = function(e){
      display.textContent = display.textContent  + "9";
  }
  cero.onclick = function(e){
      display.textContent = display.textContent  + "0";
  }
  punto.onclick = function(e){
      display.textContent = display.textContent  + ".";

  }
  sign.onclick = function(e){
      display.textContent =  "-" + display.textContent;

  }
on.onclick = function(e){
    resetear();
  display.textContent = display.textContent  + "0";
}
suma.onclick = function(e){
    operandoa = display.textContent;
    operacion = "+";
    limpiar();
}
menos.onclick = function(e){
    operandoa = display.textContent;
    operacion = "-";
    limpiar();
}
por.onclick = function(e){
    operandoa = display.textContent;
    operacion = "*";
    limpiar();
}
dividido.onclick = function(e){
    operandoa = display.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = display.textContent;
    resolver();
}

function limpiar(){
  display.textContent =  "";
}
function resetear(){
  display.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver(){
  var res = "";
  switch(operacion){
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
  }

  resetear();
  display.textContent = res;
}


//limitar 8 digitos
uno.onclick = function(){
    if(display.innerHTML == "0"){
      display.innerHTML = "";
    }
    if(display.innerHTML.length >= 8){
    }else{
    display.innerHTML += "1"
    }

  }


  dos.onclick = function(){
    if(display.innerHTML == "0"){
      display.innerHTML = "";
    }
    if(display.innerHTML.length >= 8){
    }else{
    display.innerHTML += "2"
    }
  }
  tres.onclick = function(){
    if(display.innerHTML == "0"){
      display.innerHTML = "";
    }
    if(display.innerHTML.length >= 8){
    }else{
    display.innerHTML += "3"
    }
  }
  cuatro.onclick = function(){
    if(display.innerHTML == "0"){
      display.innerHTML = "";
    }
    if(display.innerHTML.length >= 8){
    }else{
    display.innerHTML += "4"
    }
  }
  cinco.onclick = function(){
    if(display.innerHTML == "0"){
      display.innerHTML = "";
    }
    if(display.innerHTML.length >= 8){
    }else{
    display.innerHTML += "5"
    }
  }
  seis.onclick = function(){
    if(display.innerHTML == "0"){
      display.innerHTML = "";
    }
    if(display.innerHTML.length >= 8){
    }else{
    display.innerHTML += "6"
    }
  }
  siete.onclick = function(){
    if(display.innerHTML == "0"){
      display.innerHTML = "";
    }
    if(display.innerHTML.length >= 8){
    }else{
    display.innerHTML += "7"
    }
  }
  ocho.onclick = function(){
    if(display.innerHTML == "0"){
      display.innerHTML = "";
    }
    if(display.innerHTML.length >= 8){
    }else{
    display.innerHTML += "8"
    }
  }
  nueve.onclick = function(){
    if(display.innerHTML == "0"){
      display.innerHTML = "";
    }
    if(display.innerHTML.length >= 8){
    }else{
    display.innerHTML += "9"
    }
  }

  if (display.innerHTML.length < 8 ) {
  if (display.innerHTML == "0") {
  display.innerHTML = num
  }else{
  display.innerHTML += num
  }
  }
  cero.onclick = function(){
    display.innerHTML += "0"
  }

  resta.onclick = function(){
    operaciona = display.innerHTML;
    operacion = "-";
    display.innerHTML = "";
  }

  multiplicacion.onclick = function(){
    operaciona = display.innerHTML;
    operacion = "*";
    display.innerHTML = "";
  }

  division.onclick = function(){
    operaciona = display.innerHTML;
    operacion = "/";
    display.innerHTML = "";

  }
  igual.onclick = function(){
      operacionb = display.innerHTML;
      if(operacion == "+"){
      resultado = parseFloat(operaciona) + parseFloat(operacionb);
      }
      if(operacion == "-"){
      resultado = parseFloat(operaciona) - parseFloat(operacionb);
      }
      if(operacion == "*"){
      resultado = parseFloat(operaciona) * parseFloat(operacionb);
      }
      if(operacion == "/"){
      resultado = parseFloat(operaciona) / parseFloat(operacionb);
      }
      if(display.innerHTML.length >= 8){
        resultado
      }else{
      display.innerHTML = resultado
      }



  }
  on.onclick = function(){
    display.innerHTML = "0"
  }
  sign.onclick = function(){
    isSign = !isSign;
    if(isSign && display.innerHTML!="0"){
      display.innerHTML = "-" + display.innerHTML;
    }else{
      display.innerHTML =
      display.innerHTML.slice(1);
    }
  }
  sign.onclick = function(){
    display.innerHTML = display.innerHTML + ".";
    if(display.innerHTML!="0"){
      display.innerHTML =  display.innerHTML + "." ;
    }else{
      display.innerHTML =
      display.innerHTML.slice(1);
    }
  }
