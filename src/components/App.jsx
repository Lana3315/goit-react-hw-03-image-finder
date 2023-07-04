import {SearchBar} from "./Searchbar/Searchbar";
import css from './styles.module.css'
export const App = () => {


  return (
    <div className={css.app}>
      <SearchBar/>
    </div>
  );
};
export default App;
