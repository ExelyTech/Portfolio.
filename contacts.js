function validerFormulaire() {
  const message = document.monFormulaire.message.value;
  if (message === "") {
    alert("Veuillez écrire un message.");
    return false; // Empêcher l'envoi du formulaire
  }
  return true; // Envoyer le formulaire
}
