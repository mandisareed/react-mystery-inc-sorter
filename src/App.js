import React from "react";
import Table from "./components/Table";
import members from "./members.json";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

class App extends React.Component {
  state = {
    members,
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput />
        <Table />
      </div>
    );
  }
}

export default App;
