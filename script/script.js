// sript.js

// Fonction pour  récupérer et afficher l'API
function fetchAdvice(){
  //Je récupere l'URL de l'API 
  const apiUrl= 'https://api.adviceslip.com/advice';
  console.log(apiUrl)

  //Appeler l'API avec la  methode fetch
  fetch(apiUrl)
  
  .then(response => {
    console.log(response.status);
    //Vérifier si la requete a réussi (statut 200-299)
    if (!response.ok)  {
      throw new Error ('La requete a échoué avec le statut : ' + response.status);
    }
    //Convertir la requete JSON en objet Javascript et j'ai la  renvoye
    return response.json();
  })
  .then(data => {
    // Récupérer les élément HTML pour afficher les données
    const adviceIdElement = document.querySelector('.id');
    const adviceTextElement = document.querySelector('.advice');
    console.table(data)

    //Mettre à jour le contenu des éléments avec les données de la response de l'API
    adviceIdElement.textContent= data.slip.id ;
    adviceTextElement.textContent = data.slip.advice;
  })
  .catch(error => {
    // Gérer les erreurs
    console.error(error);
  });

}

// Appeler la fonction pour récupérer et afficher l'API
fetchAdvice();