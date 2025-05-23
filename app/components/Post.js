export function Post(props){
  let{title,date,content}=props,
  dateFormat=new Date(date).toLocaleString()
 // console.log(content.rendered)
  return `
  <section class="post-page">
  <aside>
  <h2>${title.rendered}</h2>
  <time datetime="${date}">${dateFormat}</time>
  </aside>
  <hr>
  <article>${content.rendered}</article>
  </section>
  `
}