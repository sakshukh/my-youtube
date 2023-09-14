type propTypes = {
  btnName: String;
};

const Button = ({ btnName }: propTypes) => {
  return <button className="bg-gray-300 rounded-lg m-2 p-2">{btnName}</button>;
};

export default Button;
