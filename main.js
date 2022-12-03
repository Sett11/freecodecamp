function sentensify(str) {
    return str.split(/\W/g).join(' ')
}

console.log(sentensify("The.force.is.strong.with.this.one"))