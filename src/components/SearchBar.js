import React, {Component} from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
        this.onInputChange = this.onInputChange.bind(this);
    } //constructor

  /*  onInputChange(event) {
        this.setState({
          term: event.target.value
        });

        this.props.onSearchTermChange(term);
    } //Event Function*/
     onInputChange(term) {
       this.setState({term: term});
       this.props.onSearchTermChange(term);
     }

    render() {
        return (
          <div className="col col-md-8 col-md-offset-2 search-bar-wrapper">
            <input placeholder="search" onChange={(event) => {this.onInputChange(event.target.value)}} value={this.state.term} type="search" className="form-control search-bar"/>
          </div>
        );
    }
}



export default SearchBar;
