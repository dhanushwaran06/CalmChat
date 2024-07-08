type Button = {
  btn: any;
  text: any;
};

export default function Button({ btn, text, ...Button }) {
  return <button onClick={btn}>{text}</button>;
}
