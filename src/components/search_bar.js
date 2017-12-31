import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
        this.onInputChange=this.onInputChange.bind(this);
        props.onSearchTermChange(this.state.term);

    }

    onInputChange(term) {
        console.log(term);
        //this.setState({searchTerm: term});
        this.props.onSearchTermChange(term);
    };
    onSearchChange(term) {
        //console.log(term);
        this.setState({searchTerm: term});
       // this.props.onSearchTermChange(term);
    };

    render() {
        return (
            <div className="search-bar">
                <input className="col-md-5" id={"search"}
                       onChange={(event) => this.onSearchChange(event.target.value)}
                       value={this.state.searchTerm}/>
                    <button
                        onClick={() => this.onInputChange(document.getElementById('search').value)}>Search</button>
            </div>
        );
    }
}

export default SearchBar;