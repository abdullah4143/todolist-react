
interface ButtonProps {
    text: string;
    color?: 'primary' | 'secondary' | 'success' | 'danger';
    onTap: () => void;
}

const Button = ({text , color, onTap}: ButtonProps) => {

  return (
    <button className={`btn btn-${color}`} onClick={onTap}>
      {text}
      </button>
  )
}

export default Button