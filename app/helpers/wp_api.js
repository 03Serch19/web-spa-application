const NAME="css-tricks",//"malvestida",//"css-tricks"
DOMAIN=`https://${NAME}.com`,
SITE=`${DOMAIN}/wp-json`,
API_WP=`${SITE}/wp/v2`,
PER_PAGE=6,
POSTS=`${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
POST=`${API_WP}/posts`,
PAGES=`${API_WP}/pages`,
SEARCH=`${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`,
CATEGORIES=`${API_WP}/categories`
let page=1
export default{
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  PER_PAGE,
  POSTS,
  POST,
  PAGES,
  SEARCH,
  CATEGORIES,
  page
}