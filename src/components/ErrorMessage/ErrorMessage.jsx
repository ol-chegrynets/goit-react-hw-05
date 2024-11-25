import s from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <>
      <p className={s.errorMsg}>
        Something went wrong! Please, reload the page!
      </p>
    </>
  );
};

export default ErrorMessage;
