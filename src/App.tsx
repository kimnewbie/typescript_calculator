import { FC } from "react";
import Calculator from "./components/Calculator";
import Form from "./components/Form";

const App: FC = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Calculator />
      <div className="padding-10"></div>
      <Form />
    </div>
  );
};
export default App;
