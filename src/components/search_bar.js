import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        props.onSearchTermChange(this.state.term);


    }

    onInputChange(term) {
        console.log(term);
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div><br/>
                <div className={"SearchStyle"}>
                    <input className={"form-control"} placeholder={"Search for..."}
                           value={this.state.term}
                           onChange={(event) => this.onInputChange(event.target.value)}/>
                </div>
            </div>
        );
    }
}

export default SearchBar;
