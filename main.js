import { ingresar_grano , ingresar_aseo , ingresar_carnes , ingresar_lacteos } from "./ingresar.js";
import {  mostrar , dato } from "./model.js";
import { Eliminar_aseo , Eliminar_grano , Eliminar_carnes, Eliminar_lacteos} from "./eliminar.js";
dato()
    
function start() {
  let opcion = prompt("Que deasea hacer? (seleccione un numero): \n 1 Mostrar cantidad de productos disponibles. \n 2 Ingresar nuevas axistencias de producto. \n 3 Eliminar existencias de productos");

  switch (opcion) {
    case "1":
      console.log(mostrar());
      break;
    case "2":  
      let op2= prompt("ingrese un producto \n grano \n aseo \n carnes \n lacteos")
        switch (op2) {
          case "grano":
            ingresar_grano()
            break;
          case "aseo":
            ingresar_aseo()
              break;
          case "carnes":
            ingresar_carnes()
              break;
          case "lacteos":
            ingresar_lacteos()
              break;
          default:
            console.log("ingrese una opcion valida ");
            break;
        }
      break;

    case "3":
      let op3= prompt("ingrese un producto \n grano \n aseo \n carnes \n lacteos")
        switch (op3) {
          case "grano":
            Eliminar_grano()
            break;
          case "aseo":
              Eliminar_aseo()
            break;
          case "carnes":
              Eliminar_carnes()
            break;
          case "lacteos":
              Eliminar_lacteos()
            break;
          default:
            console.log("ingrese una opcion valida ");
            break;
        }
        break; 
    default: 
    console.log("opcion no disponible");
      break;
  }
}
start();
