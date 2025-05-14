import { PostCard } from "../components/PostCard.js"
import { SearchPost } from "../components/SearchPost.js"
import { ajax } from "./ajax.js"
import api from "./wp_api.js"

export  function InfiniteScroll(){
const d=document,
  w=window
  let query=localStorage.getItem("wpSearch"),
  apiURL,
  Component
 w.addEventListener("scroll",async e=>{
  let {scrollTop,clientHeight,scrollHeight}=d.documentElement,
  {hash}=w.location
    //console.log(scrollTop,clientHeight,scrollHeight,hash)

    if(scrollTop+clientHeight>=scrollHeight){
      api.page++
      
      if(!hash||hash==="#/"){
        apiURL=`${api.POSTS}&page=${api.page}`
        Component=PostCard
      }else if(hash.includes("#/search")){
        apiURL=`${api.SEARCH}${query}&page=${api.page}`
        Component=SearchPost
      }else{
        return false
      }
      if(d.querySelector(".loader").style.display==="none"){
        d.querySelector(".loader").style.display="block"
        await ajax({
        url:apiURL,
        cbSuccess:posts=>{
          let html=``
          console.log(posts)
          posts.forEach(post => html+=Component(post));
          d.getElementById("main").insertAdjacentHTML("beforeend",html)
          d.querySelector(".loader").style.display="none"
        }
      })
     }
    }
 })
}