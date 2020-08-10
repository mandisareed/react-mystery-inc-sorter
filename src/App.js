import React, { useState } from "react";
import Table from "./components/Table";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import members from "./members.json"

function App() {
  const [search, setSearch] = useState("");
  let char = members;
  if (search === "") {
    char = members;
  } 
  else {
    char = members.filter((c) => {
      return c.color.includes(search);
    });
  }
    return (
      <div>
        <Header />
        <SearchInput 
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        />
        <Table />
      </div>
    );
  
}

export default App;
