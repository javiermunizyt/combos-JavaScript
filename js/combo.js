/*
LIBRERÍA CREADA POR JAVIER MUÑIZ PARA 
EL CANAL DE YOUTUBE "PROGRAMAR ES INCREÍBLE"
https://www.youtube.com/channel/UCS9KSwTM3FO2Ovv83W98GTg

PUEDES VER EL TUTORIAL COMPLETO, PASO A PASO AQUÍ
https://youtu.be/KuvRADJYPMw

*/



//============================================================
//CONSTANTES DE LAS TECLAS
const arriba    = 38;
const abajo     = 40;
const izquierda = 37;
const derecha   = 39;

const TeclaA = 65;
const TeclaS = 83;

//============================================================
//CLASE COMBO
class Combo{

  constructor(cadena){

    this.botones;                 //cadena con las teclas del combo
    this.indice = 0;                  //botón por el que vamos dentro de la secuencia
    this.codigoBoton;             //botón pulsado actualmente

    this.tiempoPermitido = 500;   //milisegundos permitidos entre pulsaciones
    this.tiempoUltimaPulsacion;   //hora a la que se pulsó la última tecla

    this.botones = cadena;        //Asignamos las teclas al array
  }


  //Método al que se llama cuando se pulsa una tecla
  pulsada(codigo){

    var exito = false;          //indica si hemos completado el combo con éxito
    this.codigoBoton = codigo;  //guardamos el código del botón pulsado

    //obtenemos la hora actual del sistema
    var hora = new Date();
    hora = hora.getTime();

    //Comparamos la hora actual con la última pulsación + tiempo permitido
    if(hora > this.tiempoUltimaPulsacion + this.tiempoPermitido){
      this.indice = 0;  //volvemos al inicio
    }

    //si hay botones por revisar en el array continuamos
    if(this.indice < this.botones.length){

      //miramos si la tecla pulsada se corresponde con la que toca ahora
      if(this.botones[this.indice] == this.codigoBoton){

        //Si quedan más teclas por revisar, incrementamos el índice (avanzamos)
        if(this.indice < this.botones.length-1){
          this.indice++;
        }

        //Si no quedan teclas por revisar, es que hemos realizado el combo con éxito
        else{
          exito = true;       //indicamos que lo hemos conseguido
          this.indice = 0;    //reiniciamos el índice a cero
        }
      }

      //Si el botón pulsado no es el que toca, volvemos a poner el índice a cero
      else{
        this.indice = 0;
      }
    }

    this.tiempoUltimaPulsacion = hora;  //guardamos la hora de la última pulsación
    return exito;
  }

}
