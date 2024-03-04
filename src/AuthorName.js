import links from "./Links.js"
let authorName = ''
export function displayAuthorName(id) {

    const name = links.find((name) => name.id === id)
    authorName = name.authorName
    console.log(authorName)

}
export default displayAuthorName;