let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0]

for (let i = 0; i < nombres.length; i++) {
  let n = nombres[i]
  let label

  if (Number.isNaN(n)) {
    label = "INVALIDE"
  } else if (n === Infinity || n === -Infinity) {
    label = "INFINI"
  } else if (1 / n === -Infinity) {
    label = "ZERO NEGATIF"
  } else if (Number.isInteger(n) && Math.abs(n) > Number.MAX_SAFE_INTEGER) {
    label = "ENTIER HORS LIMITES"
  } else if (Number.isInteger(n)) {
    label = "ENTIER SUR"
  } else {
    label = "DECIMAL"
  }

  console.log(n + " -> " + label)
}