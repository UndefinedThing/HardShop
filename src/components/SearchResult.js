import React from "react";
import "./SearchResult.css";

const SearchResult = (props) => {
  return (
    <a>
      <div className="resultat">
        <img
          className="resultat-poster"
          style={{ height: "200px" }}
          src="https://img.icons8.com/carbon-copy/100/000000/no-image.png"
        />
        <div className="resultat-infos">
          <div className="resultat-titre">{props.data.nom}</div>
          <div className="resultat-type">{props.data.type}</div>
          <div className="resultat-annee">{props.data.nb_coeur}</div>
        </div>
      </div>
    </a>
  );
};

export default SearchResult;
