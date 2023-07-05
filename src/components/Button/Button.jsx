import PropTypes from 'prop-types';
import css from '../styles.module.css'



const Button = ({ onClick }) => {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};