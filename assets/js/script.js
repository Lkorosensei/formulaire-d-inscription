console.log("Youhoooo !");
console.log(" ");

let rueFacturation = document.getElementById("streetFactur");
let villeFacturation = document.getElementById("cityFactur");
let codePostalFacturation = document.getElementById("postodeFactur");

rueFacturation.addEventListener("input", async ()  => {

    let dataAdresseFetch;
    // Je récupère l'adresse de base qui ne changera jamais
    const urlApiBase = "https://api-adresse.data.gouv.fr/search/?q=";

    // Je récupère ce que va rentrer l'utilisateur dans le rue
    let valeurEntreeRueUtilisateur = rueFacturation.value;
    console.log("C'est ce que rentre l'utilisateur dans l'input rue", valeurEntreeRueUtilisateur);
    console.log(" ");

    // Je récupère mes données entrées par l'utilisateur et je les remplace  espaces par des + 
    let valeurEntreeRueUtilisateurModifiee = valeurEntreeRueUtilisateur.replace(/ /g,'+');
    // Je crée mon adresse pour mon API finale (j'assemble l'API de base et mes données de l'utilsateur pour avoir l'url exacte)
    let urlApiAdresse = urlApiBase + valeurEntreeRueUtilisateurModifiee + "&limit=5";
    console.log('salam url api :',urlApiAdresse);

    // Je récupère mes données de mon API via fetch
    await getdataAdresseFetch();
    async function getdataAdresseFetch() {
        const res = await fetch(urlApiAdresse);
        dataAdresseFetch = await res.json();
    }
    console.log("C'est mes données récupéré via Fetch (mon dataFetch) :",dataAdresseFetch);
    console.log(" ");

    let suggestions = dataAdresseFetch.features
    console.log('mes suggestions/features : ',suggestions);
    console.log(" ");

    suggestions.forEach(features => {

        // Je crée une variable suggestion pour avoir directement mes suggestions suivi de ce que je voudrais (ville,rue,code postal)
        let properties = features.properties

        // Je fais un console log juste pour savoir quel propriétés correspond à quoi
        console.log("je regarde c'est quoi mes propietes", properties);
        console.log("j'essaie de récuperer le ?label? (label) :  ", properties.label); 
        console.log("j'essaie de récuperer le nom de la rue ?name? (name) : ", properties.name);
        console.log("j'essaie de récuperer la ville (city) : ", properties.city);
        console.log("j'essaie de récuperer le code postal (postcode) : ", properties.postcode);
        console.log(" ");

        // // Je récupère mon label de mon input Rue facturation
        let datalistSelect = document.querySelector("div label datalist")
        console.log("ma liste :",datalistSelect);

        // Je met mon option en tant qu'enfant de label pour pouvoir afficher mes options dans mon input Rue texte
        let option = document.createElement("option")
        datalistSelect.appendChild(option)

        console.log("C'est mon input Rue facturation :", rueFacturation);
        console.log("C'est la valeur de mon input Rue facturation (ce qu'il y a dans mon input) :", rueFacturation.value);
        console.log('c\'est juste mon option :', option);
        console.log('c\'est ce qu\'il y a dans mon option :', option.value);
        console.log(" ");

        option.textContent = features.properties.label

        // rueFacturation.value = features.properties.name
        // villeFacturation.value = features.properties.city
        // codePostalFacturation.value = features.properties.postcode
        // villeFacturation.value.innerHTML = "",

        console.log("c'est mon input ville :", villeFacturation);



    });

})



