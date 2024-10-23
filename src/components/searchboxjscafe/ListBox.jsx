/* eslint-disable react/prop-types */
const ListBox = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} style={{ color: "black" }}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListBox;
