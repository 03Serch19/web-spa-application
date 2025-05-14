import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { ContactForm } from "./ContactForm.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchPost } from "./SearchPost.js";

export async function Router(){
  const d=document,w=window,
  $main=d.getElementById("main")
  let{hash}=location
  //console.log(hash)
  //$main.innerHTML=null
  if(!hash||hash==="#/"){  
   await ajax({
      url:api.POSTS,
      cbSuccess:posts=>{
        let html=``
        console.log(posts)
        posts.forEach(post =>(html+=PostCard(post)));
        $main.innerHTML=html
      }
    })
  }else if(hash.includes("#/search")){
   // $main.innerHTML=`<h2>Sección del Buscador</h2>`
   let query=localStorage.getItem("wpSearch")
  if(!query) {
    d.querySelector(".loader").style.display="none"
    return false
  } 
  await ajax({
    url:`${api.SEARCH}${query}`,
    cbSuccess:search=>{
      console.log(search)
      let html=""
      if(search.length===0){
        html=`
        <p class="error">
        No existe resultados para la búsqueda del término
          <mark>${query}</mark>
        </p>
        `
      }else{
        search.forEach((post)=>html+=SearchPost(post))
      }
      $main.innerHTML=html
    }
  })
  }else if(hash==="#/contacto"){
   // $main.innerHTML=`<h2>Sección del Contacto</h2>`
  // setTimeout(() => {
    $main.appendChild(ContactForm())
   // },100);
  }else{
    /* $main.innerHTML=`<h2>Contenido del Post seleccionado</h2>`
    console.log(`${api.POST}/${localStorage.getItem("wpPostId")}`) */
    await ajax({
       url:`${api.POST}/${localStorage.getItem("wpPostId")}`,
       cbSuccess:post=>{
         //console.log(post)
         $main.innerHTML=Post(post)
       }
     })
  }
  d.querySelector(".loader").style.display="none"
}