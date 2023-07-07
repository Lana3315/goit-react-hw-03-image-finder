import PropTypes from 'prop-types';
import css from '../styles.module.css'

const ImageGalleryItem = ({ data, onOpenModal }) => {
  return data.map(el => (
    <li className={css.imageitem} key={el.id}>
      <img
        src={el.webformatURL}
        className={css.imageitemimage}
        alt={el.tags}
        onClick={() => onOpenModal(el.largeImageURL, el.tags)}
      />
    </li>
  ));
};


ImageGalleryItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;