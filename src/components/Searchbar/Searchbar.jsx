import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../styles.module.css'

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    const value = e.target.value.trimStart();
    this.setState({ query: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.length === 0) return;
    this.props.onSubmit(this.state.query);
  };
  render() {
    const { query } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchbutton}>
            <span className="searchForm-button-label"></span>
          </button>

          <input
            className={css.searchinput}
            type="text"
            autoComplete="off"
            autoFocus
            value={query}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
