import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../styles.module.css'

export default function ImageGallery() {
  return (
    <ul className={css.gallery}>
      <ImageGalleryItem/>
  
    </ul>
  );
}

