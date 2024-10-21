import { TabList } from "./components/TabList";
import { tabsList } from "./utils/tabdata";
const RootComponent = () => {
  const handleTabClick = (index) => {
    console.log("Click on RootComponent", index);
  };
  return (
    <div>
      <TabList tabs={tabsList} onTabChange={handleTabClick} />
    </div>
  );
};

export default RootComponent;
