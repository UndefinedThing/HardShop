const firebase = require("firebase");
require("firebase/firestore");

const Helper = {
  search: (searchText, categorie) => {
    var db = firebase.firestore();
    return db.collection(categorie).where("nom", "==", searchText).get();
  },
};

export default Helper;
