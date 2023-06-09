console.log(global)
console.log(__filename)
console.log(__dirname)
// declare custom global, NOT RECOMENDED, create modules and export and import when you need is better
global.micustomglobal = 'custom global'
console.log(micustomglobal)