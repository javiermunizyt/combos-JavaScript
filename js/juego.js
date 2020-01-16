//===========================================================
//OBJETOS CON LOS COMBOS

var konami  = new Combo([arriba,arriba,abajo,abajo]);
var ataque1 = new Combo([TeclaA,TeclaS,abajo,abajo]);

//============================================================
//DISPARADOR TECLADO
document.addEventListener('keydown', function(tecla){
  var codigoTecla = tecla.keyCode;


  if(konami.pulsada(codigoTecla)){
    console.log('Codigo Konami!!!');
  }

 if(ataque1.pulsada(codigoTecla)){
    console.log('Ataque especial 1');
  }


});
