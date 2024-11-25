import { Link } from 'react-router-dom';
import s from './GoBackBtn.module.css';
const GoBackBtn = ({ children, path }) => {
  return (
    <>
      <Link className={s.goBackBtn} to={path}>
        {children}
      </Link>
    </>
  );
};
export default GoBackBtn;
