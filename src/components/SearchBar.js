import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <br />
            <label
              style={{ color: `blue`, textAlign: `center`, fontSize: `40px` }}
            >
              Image Search
            </label>
            <br />
            <input
              style={{
                border: `3px solid orange`,
                
                fontWeight: `bold`,
                fontSize: `30px`
              }}
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
