/** @format */
import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
  state = { input: '' };

  render() {
    return (
      <div className="row py-4">
        <div className="col-sm-12">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.props.onSubmit(this.state.input);
            }}
          >
            <div className="form-group">
              <label htmlFor="search">Image Search</label>
              <input
                id="search"
                type="text"
                value={this.state.input}
                className="form-control"
                placeholder="Search"
                onChange={(e) => {
                  this.setState({ input: e.target.value });
                }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
