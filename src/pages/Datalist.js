// // var db = firebase.firestore();
//   // db
//   // .collection("CPU's")
//   // .where("architecture", "==", "AMD Zen+ : 12 nm")    
//   // .get()
//   // .then(function(querySnapshot) {
//   //   querySnapshot.forEach(function(doc) {
//   //   // doc.data() is never undefined for query doc snapshots
//   //   console.log(doc.id, " => ", doc.data());

//   //     let Name = doc.data().nom
//   //     let Freq = doc.data().fréquence
//   //     let nbcoeur = doc.data().nb_coeur
//   //     let cache = doc.data().cache
//   //     let type = doc.data().type

//   //     document.getElementById("name").innerText = Name
//   //     document.getElementById("type").innerText = type
//   //     document.getElementById("freq").innerText = Freq
//   //     document.getElementById("nbcoeur").innerText = nbcoeur
//   //     document.getElementById("cache").innerText = cache
//   //   });
//   // })
//   // .catch(function(error) {
//   //   console.log("Error getting documents: ", error);
//   // });

//   <div className="App">
//   <h2>CPU:</h2>
//           <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>Nom</th>
//                   <th>Type</th>
//                   <th>Fréquence</th>
//                   <th>Nombre de coeur(threads)</th>
//                   <th>Cache</th>
//                   </tr>
//               </thead>
//               {/* <tbody>
//                   <tr id="tr">
//                   <td id="name">{doc.data().nom}</td>
//                   <td id="type">{doc.data().type}</td>
//                   <td id="freq">{doc.data().fréquence}</td>
//                   <td id="nbcoeur">{doc.data().nb_coeur}</td>
//                   <td id="cache">{doc.data().cache}</td>
//                  </tr>
//              </tbody> */}
//           </table>
// </div>