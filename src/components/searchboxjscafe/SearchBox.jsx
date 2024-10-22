/* eslint-disable no-unused-vars */
import { useState } from "react";
import useFetchPromise from "./useFetchPromise";

/* eslint-disable react/prop-types */
const SearchBox = ({
  id,
  name,
  label,
  placeholder,
  style,
  maxItems,
  autoComplete,
  debounceWait,
  listDisplay,
  errMess,
  noItemMess,
  transFormData
}) => {
  const [query, setQuery] = useState("");
  const [data,setData,error] = useFetchPromise(query,transFormData);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  return (
    <>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        type="text"
        className={style.input}
        id={id}
        name={name}
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
      {data && listDisplay(data)}
    </>
  );
};

export default SearchBox;
