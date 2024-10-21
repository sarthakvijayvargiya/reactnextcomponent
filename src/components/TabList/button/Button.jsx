/* eslint-disable react/prop-types */
import "./buttonstyle.css";
const Button = ({ tabName, onClick = () => {}, ...rest }) => {
  return (
    <div>
      <button onClick={onClick} {...rest}>
        {tabName}
      </button>
    </div>
  );
};

export default Button;
