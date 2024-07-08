import { Fragment } from "react/jsx-runtime";

type Inputs = {
  input: string;
  value: string;
  type: string;
};

export default function Inputs({ input, value, type, ...Inputs }) {
  return (
    <Fragment>
      <div>
        <input type={type} onChange={input} placeholder={value} />
      </div>
    </Fragment>
  );
}
