import s from '../Button/buttonLoad.module.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={s.buttonLoad}>
      Load more
    </button>
  );
};
export default Button;
