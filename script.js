// fetch("https://api.github.com/users/shaymaebkn")
// .then(reponse => (reponse.json())
// .then(reponse2 => console.table(reponse2))) 
//et en peut faire avec console.log mais c'est pas bon structurer 
// et en peut faire aussi (reponse.name) ou type ou ce que je veux ca marche
 

// btn.onclick = () => { 
//     fetch("https://api.github.com/users/"+ champ.value)
//     .then(reponse => reponse.json())
//     .then(data => {
//         output.textcontent = "";
//         output.textcontent = ` ${data.name}`;
//         const img = document.createElement("img");
//         img.src = data.avatar_url;
//         img.width = "100";
//         output.appendchild(img)
//     })

// }



//  fetch('http://www.site.com/users')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })




document.querySelector("#cp").addEventListener('input', function(){
    if (this.value.length == 5 ) {
        let url = 
            `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,
             code,codesPostaux,codedepartement,codeRegion,population&format=json&geometry=centre`;
            
            fetch(url)
                .then(Response => Response.json()
                .then(data =>{
                   console.log(data); 
                   let affichage = `<ul>`;
                   for (let ville of data ){
                       affichage += `<li>  <strong> ${ville.nom}</strong> ,  ${ville.population} habitant </li>`
                       

                   }
                   affichage += `</ul>`;
                   document.querySelector("#ville").innerHTML = affichage;
                })
                     
            ).catch(err => console.log('Erreur :' + err));
    };
});









