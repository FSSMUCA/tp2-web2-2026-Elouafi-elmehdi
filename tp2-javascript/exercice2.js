let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}]

for (let i = 0; i < valeurs.length; i++) {
  let val = valeurs[i]
  let a = (val === "") ? "(chaine vide)" : String(val)
  let b = val ? "truthy" : "falsy"
  console.log(a + " -> " + b)
}