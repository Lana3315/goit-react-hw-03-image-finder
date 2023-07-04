import React, { Component } from "react";
import css from '../styles.module.css'

class SearchBar extends Component{
  state = {
   value: '',
  }
  handleChange = ({ target: {value} }) => {
   this.setState({value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('state', this.state)
   }
  render() {
  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={this.handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonlabel}>Search</span>
    </button>

    <input
      className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChange}
          value={this.state.value}
    />
  </form>
</header>
    )
    }
}
export default SearchBar;