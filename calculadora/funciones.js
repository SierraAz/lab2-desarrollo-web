var operandoa;
var operandob;
var operacion;

function init(){
    var mostrar = document.getElementById('mostrar');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
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

    uno.onclick = function(e){
        mostrar.textContent = mostrar.textContent  + "1";
    }
    dos.onclick = function(e){
        mostrar.textContent = mostrar.textContent  + "2";
    }
    tres.onclick = function(e){
        mostrar.textContent = mostrar.textContent  + "3";
    }
    cuatro.onclick = function(e){
        mostrar.textContent = mostrar.textContent  + "4";
    }
    cinco.onclick = function(e){
        mostrar.textContent = mostrar.textContent  + "5";
    }
    seis.onclick = function(e){
        mostrar.textContent = mostrar.textContent  + "6";
    }
    siete.onclick = function(e){
        mostrar.textContent = mostrar.textContent  + "7";
    }
    ocho.onclick = function(e){
        mostrar.textContent = mostrar.textContent  + "8";
    }
    nueve.onclick = function(e){
        mostrar.textContent = mostrar.textContent  + "9";
    }
    cero.onclick = function(e){
        mostrar.textContent = mostrar.textContent  + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = mostrar.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = mostrar.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = mostrar.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = mostrar.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = mostrar.textContent;
        resolver();
    }
    function limpiar(){
        mostrar.textContent = "";
    }

    function resetear(){
        mostrar.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }
    function resolver(){
        var res = 0;
        switch(operacion){
          case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
          case "-":
              res = parseFloat(operandoa) - parseFloat(operandob);
              break;
          case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
          case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        }
        resetear();
        mostrar.textContent = res;
      }

  }