let paires = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0]
]

let i = 0

for (let j = 0; j < paires.length; j++) {
  let a = paires[j][0]
  let b = paires[j][1]

  let eq1 = a == b
  let eq2 = a === b

  let colonne = JSON.stringify(a) + " == " + JSON.stringify(b)
  let colonne2 = JSON.stringify(a) + " === " + JSON.stringify(b)

  console.log(
    colonne.padEnd(20) + " -> " + String(eq1).padEnd(7) +
    " |   " +
    colonne2.padEnd(20) + " -> " + String(eq2)
  )

  if (eq1 === true && eq2 === false) {
    i++
  }
}

console.log("---")
console.log(i + " paire(s) où == et === donnent des résultats différents")