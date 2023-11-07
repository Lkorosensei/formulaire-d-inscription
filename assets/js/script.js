console.log("YOUHOOOO");

let dataAdressFetch;
const urlApiBase = "https://api-adresse.data.gouv.fr/search/?q=";
// const urlApiAdresse = urlApiBase + adresse;




let adresse = document.getElementById("streetFactur");
adresse.addEventListener("input", async function () {

    let valeurUtilisateur = adresse.value;
    console.log("Mon utilisateur à entrée : ", valeurUtilisateur);

    // let urlApiAdresse = urlApiBase + valeurUtilisateur;
    // console.log("urlApiAdresse : ",urlApiAdresse);
    

    let valeurUtilisateurModifiee = valeurUtilisateur.replace(/ /g, '+');
    let urlApiAdresse = urlApiBase + valeurUtilisateurModifiee + "&limit=5";
    console.log("valeurUtilisateur : ", valeurUtilisateur);
    console.log("valeurUtilisateurModifiee : ", valeurUtilisateurModifiee);
    console.log("C'est mon url de base : ",urlApiBase);
    console.log("C'est ma vrai URL qui m'amène vers la bonne API : ",urlApiAdresse);
   
    await getDataAdressFetch();
    async function  getDataAdressFetch() {
    const res = await fetch(urlApiAdresse);
    dataAdressFetch = await res.json();
    console.log('mon dataFetch : ',dataAdressFetch);
    dataAdressFetch.features.forEach(adresse => {
        let propriete = adresse.properties;

        let rue = document.getElementById("streetFactur")/*.value*/;
        let ville = document.getElementById("cityFactur").value;
        let codePostal = document.getElementById("postcodeFactur")/*.value*/;

        // rue.innerText = propriete.name;
        // ville.innerText = propriete.city;
        // codePostal.innerText = propriete.postcode

        console.log("test nom dans le rue", rue.value);
        console.log("test rue", rue );
        console.log("test ville",ville);
        console.log("test ville dans le ville ",ville.value);


        console.log("j'essaie de récuperer le ?label? (label) :  ", propriete.label); 
        console.log("j'essaie de récuperer le nom de la rue ?name? (name) : ", propriete.name);
        console.log("j'essaie de récuperer la ville (city) : ", propriete.city);  
        console.log("j'essaie de récuperer le code postal (postcode) : ", propriete.postcode);
    });
    }
})


