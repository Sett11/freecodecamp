
function urlSlug(title) {
    return title.trim().split(/\s+/g).join('-').toLowerCase()
}

console.log(urlSlug(" Winter Is  Coming"))