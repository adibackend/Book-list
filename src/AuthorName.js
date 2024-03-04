import links from "./Links.js"
let authorName = ''
export function displayAuthorName(id) {

    const name = links.find((name) => name.id === id)
    authorName = name.authorName
    console.log(authorName)
    let sentElement=document.getElementById('hell')
    if(sentElement){
        sentElement.textContent=authorName
    }


}
export default displayAuthorName;