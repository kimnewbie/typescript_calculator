import { FC } from "react";

interface Props {
  value: string;
  onClick?: () => void; // btn에 onClick이 없어도 가능하도록
}

const Button: FC<Props> = ({ value, onClick }): JSX.Element => {
  return (
    <button onClick={onClick} className="calc-btn border">
      {value}
    </button>
  );
};

export default Button;
