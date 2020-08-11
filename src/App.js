//import React framework and appropriate Hook(s)
import React, { useState } from "react";
//import Components being utilized to compose the app/website
import Table from "./components/Table";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

function App() {
  // create a variable to both:
  // a: create the initial state of the search input's value + holds it's value as it changes
  // b: hold a function that updates the state of the search input's value
  const [search, setSearch] = useState("");
  
    return (
      <div>
        <Header />
          {/* Pass the following properties to the SearchInput component:
              value: which holds the value of the current state of the search input, and
              onChange: which is a function that calls the setSearch function to update the state of
              the search input   */}
        <SearchInput   
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        />
        <Table search={search} />
      </div>
    );
  
}

export default App;
