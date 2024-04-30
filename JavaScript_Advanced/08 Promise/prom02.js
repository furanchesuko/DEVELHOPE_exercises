//-Crea una catena di Promises per simulare un'operazione asincrona in più fasi. 

//-La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 

//-La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].

// -Infine, chiama le funzioni per recuperare e stampare in console
// il nome dell'utente e i titoli dei post.


//creo variabili contenenti i dati
const user = { id: 1, name: 'John' }
const post = ['Post 1', 'Post 2', 'Post 3']
//creo funzione di recupero dati utente e imposto delay e casistica d'errore
function fetchUserData() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if (user) {
              resolve(`Dati utente recuperati: { id: ${user.id} name: ${user.name} }`)
            } else {
              reject("Impossibile recuperare i dati")
            }
        }, 2000)    
    })
}
//creo funzione di recupero post utente e imposto delay e casistica d'errore  
function fetchUserPosts(userId, userName) {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if (userId === user.id && userName === user.name) {
              resolve(`Post utente recuperati: ${post}`)
            } else {
              reject("Impossibile recuperare i post")
            }
        }, 4000)   
    })
}


//richiamo funzioni SENZA concatenazione
/* fetchUserData().then((data) => {
    console.log(data);
    }).catch ((error) => {
        console.log(error);
    })

fetchUserPosts(user.id,user.name).then((data) => {
    console.log(data);
    }).catch ((error) => {
        console.error(error);
    })    */ 


//richiamo funzioni CON concatenazione (come visto in live)
fetchUserData()
.then (data => {
    console.log(data)
    return fetchUserPosts(user.id, user.name) //restituiamo passando dati
})
.then(post => {
    console.log(post)
})
.catch(error => console.error(error))