import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode; // 어떤 props을 받을 건데, 구체적으로 어떤 타입이 올지 알 수 없거나, 어떠한 타입도 모두 받고 싶을 때 사용
}

const ButtonWrapper: FC<Props> = ({ children }): JSX.Element => {
  return <div className="btn-wrapper">{children}</div>;
};

export default ButtonWrapper;
