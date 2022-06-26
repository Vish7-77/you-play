import React, { Component } from "react";

export class Search extends Component {
  state = {
    term: "",
  };
  handlechange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handlesubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            You-Play
          </a>
          <form className="d-flex" onSubmit={this.handlesubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Home"
              aria-label="Search"
              onChange={this.handlechange}
              value={this.state.term}
              name="searchVideo"
            />
            <button
              className="btn btn-outline-success"
              onSubmit={this.handlesubmit}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Search;
