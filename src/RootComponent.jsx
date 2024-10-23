import { SearchBox, ListBox } from "./components/searchboxjscafe";
import { TabList } from "./components/TabList";
import { tabsList } from "./utils/tabdata";
const RootComponent = () => {
  const handleTabClick = (index) => {
    console.log("Click on RootComponent", index);
  };

  const transFormData = (data) => {
    return data.results;
  };
  const dataPromise = async (query,signal) =>
    await fetch(`https://swapi.dev/api/people/?search=${query}`,{signal});
  return (
    <div>
      {/* <TabList tabs={tabsList} onTabChange={handleTabClick} /> */}
      <SearchBox
        id="personName"
        name="personName"
        label="Enter Name"
        placeholder="Enter your fav star war char"
        style={{
          label: "",
          input: "",
        }}
        promise={dataPromise}
        maxItems={5}
        autoComplete={true}
        debounceWait={400}
        listDisplay={(items) => <ListBox items={items} />}
        transFormData={transFormData}
        errMess={"Not Found"}
        noItemMess={() => <div>Sorry... No such character present</div>}
      />
    </div>
  );
};

export default RootComponent;
