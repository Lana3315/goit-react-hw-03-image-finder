import css from '../styles.module.css'
export const SearchBar = () => {
  return (
    <header className={css.searchbar}>
      <form className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.buttonlabel}>Search</span>
    </button>

    <input
      className={css.input}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)
}
export default SearchBar;