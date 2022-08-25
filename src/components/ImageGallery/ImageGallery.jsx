import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ data, onClick }) => {
  return (
    <ul className={s.gallery}>
      {data.map(el => (
        <ImageGalleryItem
          onClick={onClick}
          key={el.id}
          originUrl={el.largeImageURL}
          image={el.webformatURL}
          id={el.id}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
