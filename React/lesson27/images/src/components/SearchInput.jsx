import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = { searchInput: '' };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit = function (event) {
    event.preventDefault();
    this.props.onSubmit(this.state.searchInput);
  };

  // onFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this);
  // };

  render() {
    return (
      <div className="wrap">
        <form className="search" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            className="searchTerm"
            value={this.state.searchInput}
            onChange={(event) =>
              this.setState({ searchInput: event.target.value })
            }
            placeholder="What images are you looking for?"
          />
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={solid('search')} />
          </button>
        </form>
      </div>
    );
  }
}
