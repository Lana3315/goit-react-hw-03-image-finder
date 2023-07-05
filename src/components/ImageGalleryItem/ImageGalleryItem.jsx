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
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  data: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};