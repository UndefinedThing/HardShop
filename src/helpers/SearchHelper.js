const firebase = require("firebase");
require("firebase/firestore");

const Helper = {
  search: (searchText, categorie) => {
    console.log(searchText, categorie);
    const db = firebase.firestore();
    const response = db
      .collection(categorie)
      .where("nom", "==", searchText)
      .get();
    console.log(response);
    return response;
  },
};

export default Helper;
