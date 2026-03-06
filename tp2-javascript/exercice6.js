let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

let variables = [
  { nom: "nom",   val: nom   },
  { nom: "age",   val: age   },
  { nom: "ville", val: ville },
  { nom: "score", val: score },
  { nom: "actif", val: actif }
]

// Partie A
console.log("-- Partie A : ?? --")
for (let i = 0; i < variables.length; i++) {
  let v = variables[i].val
  let res = v ?? "valeur par défaut"
  console.log(variables[i].nom + " ?? \"valeur par défaut\"    -> " + res)
}

console.log("")

// Partie B 
console.log("-- Partie B : || --")
for (let i = 0; i < variables.length; i++) {
  let v = variables[i].val
  let res = v || "valeur par défaut"
  console.log(variables[i].nom + " || \"valeur par défaut\"    -> " + res)
}

console.log("")

// Partie C
console.log("-- Partie C : comparaison --")
for (let i = 0; i < variables.length; i++) {
  let v = variables[i].val
  let resNullish = v ?? "valeur par défaut"
  let resOr = v || "valeur par défaut"
  let meme = String(resNullish) === String(resOr) ? "même résultat" : "résultat différent"
  console.log(variables[i].nom.padEnd(6) + ": ?? et || -> " + meme)
}