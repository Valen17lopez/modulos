export function Eliminar_grano() {
        let opcion = prompt("ingrese el producto que desea eliminar")
        let opcion2 = parseInt(prompt("ingrese la cantidad de productos que desea eliminar"))
                let granos = localStorage.getItem(opcion)
                localStorage.setItem(opcion,parseInt(granos) - opcion2)
                let mensaje =`${opcion} ${localStorage.getItem(opcion)}`
                console.log(mensaje);
        }
        
export function Eliminar_aseo() {
        let opcion = prompt("ingrese el producto que desea eliminar")
        let opcion2 = parseInt(prompt("ingrese la cantidad de productos que desea eliminar"))
                let aseo = localStorage.getItem(opcion)
                localStorage.setItem(opcion, parseInt(aseo) - opcion2)
                let mensaje =`${opcion} ${localStorage.getItem(opcion)}`
                console.log(mensaje);
        }     

export function Eliminar_carnes() {
        let opcion = prompt("ingrese el producto que desea eliminar")
        let opcion2 = parseInt(prompt("ingrese la cantidad de productos que desea eliminar"))
                let carnes = localStorage.getItem(opcion)
                localStorage.setItem(opcion, parseInt(carnes) - opcion2)
                let mensaje =`${opcion} ${localStorage.getItem(opcion)}`
                console.log(mensaje);
        }

export function Eliminar_lacteos() {
          let opcion = prompt("ingrese el producto que desea eliminar")
          let opcion2 = parseInt(prompt("ingrese la cantidad de productos que desea eliminar"))
                let lacteos = localStorage.getItem(opcion)
                localStorage.setItem(opcion, parseInt(lacteos) - opcion2)
                let mensaje =`${opcion} ${localStorage.getItem(opcion)}`
                console.log(mensaje);
        }