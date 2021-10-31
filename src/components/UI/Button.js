import style from './Button.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${style['button']} ${style[`button--${props.type}`]}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
