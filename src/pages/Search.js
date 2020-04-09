import React from "react";
import SearchResult from "../components/SearchResult";
import Helper from "../helpers/SearchHelper";
import "./Search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      oneSearchDone: false,
      results: [],
      searchText: "",
      categorie: "CPU's",
    };
  }

  search() {
    this.setState({ isLoading: true });
    Helper.search(this.state.searchText, this.state.categorie)
      .then((response) =>
        this.setState({
          results: response.data.results,
          isLoading: false,
          oneSearchDone: true,
        })
      )
      .catch((error) => alert(error.message));
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <select value={this.state.categorie} onChange={this.updateInput}>
              <option value="CPU's">CPU</option>
              <option value="Case">Case</option>
              <option value="Cooling">Water Cooling</option>
              <option value="GPU's">Carte graphique</option>
              <option value="HDD's">Disque dur</option>
              <option value="MotherBoard">Carte mére</option>
              <option value="PowerSupply">Alimentition</option>
              <option value="RAM">Carte mémoire</option>
              <option value="SSD's">SSD</option>
            </select>
          </div>
          <span>Recherche</span>
          <input
            type="text"
            style={{ marginLeft: "16px", marginRight: "16px" }}
          />
          <button onClick={() => this.search()}>Rechercher</button>
        </div>
        <div className="resultats">
          {this.state.isLoading
            ? "Chargement ..."
            : this.state.results.length === 0 && this.state.oneSearchDone
            ? "Pas de résultat !"
            : this.state.results.map((result) => (
                <SearchResult data={result} key={`${result.type}`} />
              ))}
        </div>
      </div>
    );
  }
}
