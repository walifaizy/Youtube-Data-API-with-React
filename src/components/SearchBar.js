import React, {Component} from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
        this.onInputChange = this.onInputChange.bind(this);
    } //constructor

    onInputChange(event) {
        this.setState({
          term: event.target.value
        });
    } //Event Function

    render() {
        return (
          <div className="col col-md-8 col-md-offset-2">
            <input value={this.state.term} type="search" className="form-control" onChange={this.onInputChange}/>
          </div>
        );
    }
}



export default SearchBar;
