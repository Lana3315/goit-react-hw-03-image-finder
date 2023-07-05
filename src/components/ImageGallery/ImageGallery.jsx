import PropTypes from 'prop-types';
import css from '../styles.module.css'

const ImageGallery = ({ children }) => {
  return <ul className={css.galleryimage}>{children}</ul>;
};

export default ImageGallery;

ImageGallery.propTypes = {
  children: PropTypes.object,
};
