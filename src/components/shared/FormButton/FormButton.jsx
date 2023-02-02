import css from './formButton.module.css';

export const FormButton = ({ text, type, onRemove }) => {
  return (
    <button onClick={onRemove} className={css.btn} type={type}>
      {text}
    </button>
  );
};
