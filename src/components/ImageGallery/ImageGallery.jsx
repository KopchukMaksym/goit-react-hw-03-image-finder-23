import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

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
