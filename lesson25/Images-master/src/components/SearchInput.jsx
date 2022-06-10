import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class SearchInput extends Component {
  state = { inputValue: '' };

  onFormSubmit = async (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <div className="wrap">
        <form className="search" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
            value={this.state.inputValue}
            onChange={(event) =>
              this.setState({ inputValue: event.target.value })
            }
          />
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={solid('search')} />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchInput;
