import s from './ImageGallery.module.css';

const ImageGalleryItem = props => {
  const { image, originUrl, onClick } = props;

  return (
    <li onClick={() => onClick(originUrl)} className={s.galleryItem}>
      <img src={image} alt="" className={s.imageItem} />
    </li>
  );
};
export default ImageGalleryItem;
