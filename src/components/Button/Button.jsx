import s from '../Button/buttonLoad.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={s.buttonLoad}>
      Load more
    </button>
  );
};
export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
