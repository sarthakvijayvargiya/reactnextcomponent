/* eslint-disable react/prop-types */
const ListBox = ({ items }) => {
    console.log(items)
    console.log("Rendered")
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} style={{ color: "white" }}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListBox;
