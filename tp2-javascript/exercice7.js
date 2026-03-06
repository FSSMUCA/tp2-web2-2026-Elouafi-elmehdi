let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

// 1. Sous-total
let sousTotal = Math.round(prix * quantite * 1000) / 1000
console.log("Sous-total : " + sousTotal + " MAD")

// 2. Réduction uniquement si codePromo != null ET estMembre == true
let reduction = (codePromo !== null && estMembre) ? (sousTotal * reductionPourcentage / 100) : 0
console.log("Réduction : " + reduction + " MAD")

// 3. Total final
let total = sousTotal - reduction
console.log("Total final : " + total + " MAD")

// 4. Vérification du solde
let paiementAccepte = soldeCompte >= total
console.log(paiementAccepte ? "Paiement accepté" : "Solde insuffisant")

// 5. Nouveau solde si paiement accepté
let nouveauSolde = paiementAccepte ? soldeCompte - total : soldeCompte
if (paiementAccepte) {
  console.log("Nouveau solde : " + nouveauSolde + " MAD")
}

// 6. Récapitulatif
console.log("===== RÉCAPITULATIF =====")
console.log("Produit   : " + nomProduit)
console.log("Quantité  : " + quantite)
console.log("Prix unit.: " + prix + " MAD")
console.log("Sous-total: " + sousTotal + " MAD")
console.log("Réduction : " + reduction + " MAD")
console.log("Total     : " + total + " MAD")
console.log("Statut    : " + (paiementAccepte ? "Paiement accepté" : "Solde insuffisant"))
console.log("Solde     : " + nouveauSolde + " MAD")
console.log("=========================")