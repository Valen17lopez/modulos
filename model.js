export function mostrar() {
  let  m =`
   arroz ${localStorage.getItem("arroz")}\n
   frijoles ${localStorage.getItem("frijoles")} \n
   lentejas ${localStorage.getItem("lentejas")} \n
   jabon ${localStorage.getItem("jabon")} \n
   limpido ${localStorage.getItem("limpido")} \n
   champu ${localStorage.getItem("champu")} \n
   pescado ${localStorage.getItem("pescado")} \n
   res ${localStorage.getItem("res")} \n
   cerdo ${localStorage.getItem("cerdo")} \n
   yogurt${localStorage.getItem("yogurt")} \n
   leche ${localStorage.getItem("leche")} \n
   kumis ${localStorage.getItem("kumis")} \n`

  return m;
}

export function dato() {
  localStorage.setItem("arroz", "30")
  localStorage.setItem("frijoles", "20")
  localStorage.setItem("lentejas", "79")
  localStorage.setItem("jabon", "14")
  localStorage.setItem("limpido", "3")
  localStorage.setItem("champu", "50")
  localStorage.setItem("pescado", "14")
  localStorage.setItem("res", "10")
  localStorage.setItem("cerdo", "30")
  localStorage.setItem("yogurt", "70")
  localStorage.setItem("leche", "40")
  localStorage.setItem("kumis", "37")
}
