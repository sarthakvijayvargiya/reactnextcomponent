import { useState } from "react";
import { Button } from "./button";

/* eslint-disable react/prop-types */
const TabList = ({ tabs, defaultIndex = 2,onTabChange=()=>{} }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const handleClick = (index) => {
    return () => {
      setSelectedIndex(index);
      console.log(index);
      onTabChange(index)
    };
  };
  const Component = tabs[selectedIndex].component;
  return (
    <div>
      {tabs.map((tab, index) => (
        <Button tabName={tab.label} key={tab.id} onClick={handleClick(index)} data-selected={index===selectedIndex} />
      ))}
      <Component />
    </div>
  );
};

export default TabList;

export function ComponentA() {
  return <div>Component A</div>;
}

export function ComponentB() {
  return <div>Component B</div>;
}

export function ComponentC() {
  return <div>Component C</div>;
}

export function ComponentD() {
  return <div>Component D</div>;
}
