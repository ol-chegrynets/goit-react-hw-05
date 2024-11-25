import s from './Loader.module.css';
import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={s.backdropLoader}>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
