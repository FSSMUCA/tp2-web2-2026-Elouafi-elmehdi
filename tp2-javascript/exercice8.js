let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

// nom : trim + vérification vide
let nomCorrige = nom.trim()
if (nomCorrige === "") { nomCorrige = "Inconnu" }

// age : conversion + validation
let ageNombre = parseInt(age)
let ageValide = !Number.isNaN(ageNombre) && ageNombre > 0

// email : doit contenir @ et un . après le @
let indexArobase = email.indexOf("@")
let emailValide = false
let emailRaison = ""
if (indexArobase === -1) {
  emailRaison = "invalide : pas de @"
} else {
  let indexPoint = email.indexOf(".", indexArobase)
  if (indexPoint === -1) {
    emailRaison = "invalide : pas de point après @"
  } else {
    emailValide = true
    emailRaison = "valide"
  }
}

// scoreJeu : extraire partie numérique
let scoreNombre = parseInt(scoreJeu)
if (Number.isNaN(scoreNombre)) { scoreNombre = 0 }

// estAdmin : comparaison manuelle (Boolean("false") === true !)
let estAdminBool = estAdmin === "true"

// derniereConnexion : valeur par défaut avec ??
let connexionAffichee = derniereConnexion ?? "Jamais connecté"

// nombreConnexions : conversion + test 0
let connexionsNombre = Number(nombreConnexions)
let connexionsAffichage = connexionsNombre === 0 ? "Aucune connexion" : String(connexionsNombre)

// Rapport
console.log("===== RAPPORT UTILISATEUR =====")
console.log("nom              : \"" + nomCorrige + "\" (corrigé : espaces supprimés)")
console.log("age              : " + (ageValide ? ageNombre + " (valide)" : "invalide"))
console.log("email            : \"" + email + "\" (" + emailRaison + ")")
console.log("scoreJeu         : " + scoreNombre + " (extrait depuis \"" + scoreJeu + "\")")
console.log("estAdmin         : " + estAdminBool + " (attention : Boolean(\"false\") = true, conversion manuelle requise)")
console.log("derniereConnexion: \"" + connexionAffichee + "\" (valeur par défaut via ??)")
console.log("nombreConnexions : \"" + connexionsAffichage + "\" (0 après conversion)")
console.log("================================")
