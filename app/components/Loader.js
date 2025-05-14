export function Loader(){
  const $loader=document.createElement("img")
  $loader.src="app/assets/loader.svg"//no sube de nivel porque el src debe ser desde donde sta el archivo index.html
  $loader.alt="Cargando..."
  $loader.classList.add("loader")
  return $loader
}