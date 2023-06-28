export function ingresar_grano() {
  let opcion = prompt("ingrese el producto que desea actualizar")
  let opcion2 = parseInt(prompt("ingrese la cantidad de productos que deseas actualizar"))
          let granos = localStorage.getItem(opcion)
          localStorage.setItem(opcion, opcion2 + parseInt(granos))
          let mensaje =` ${opcion} ${localStorage.getItem(opcion)}`
          console.log(mensaje);
}

export function ingresar_aseo() {
  let opcion = prompt("ingrese el producto que desea actualizar")
  let opcion2 = parseInt(prompt("ingrese la cantidad de productos que deseas actualizar"))
      let aseo = localStorage.getItem(opcion)
      localStorage.setItem(opcion, opcion2 + parseInt(aseo))
      let mensaje =` ${opcion} ${localStorage.getItem(opcion)}`
      console.log(mensaje);
}

export function ingresar_carnes() {
  let opcion = prompt("ingrese el producto que desea actualizar")
  let opcion2 = parseInt(prompt("ingrese la cantidad de productos que deseas actualizar"))
      let carnes = localStorage.getItem(opcion)
      localStorage.setItem(opcion, opcion2 + parseInt(carnes))
      let mensaje =` ${opcion} ${localStorage.getItem(opcion)}`
      console.log(mensaje);
}
export function ingresar_lacteos() {
  let opcion = prompt("ingrese el producto que desea actualizar")
  let opcion2 = parseInt(prompt("ingrese la cantidad de productos que desea actualizar"))
      let lacteos = localStorage.getItem(opcion)
      localStorage.setItem(opcion, opcion2 + parseInt(lacteos))
      let mensaje =` ${opcion} ${localStorage.getItem(opcion)}`
      console.log(mensaje);
      }

      

