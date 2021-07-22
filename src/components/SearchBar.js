import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'Search for a video...' };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui search-bar" style={{ marginBottom: '1em' }}>
        <form className="ui form" onSubmit={this.onFormSubmit} action="">
          <div className="field">
            {/* <label htmlFor="">Video Search</label> */}
            <input
              type="text"
              value={this.state.term}
              onClick={(e) => {
                this.setState({ term: '' });
              }}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
