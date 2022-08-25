import { RotatingLines } from 'react-loader-spinner';
import s from '../Loader/loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="200"
        visible={true}
      />
    </div>
  );
};

export default Loader;
